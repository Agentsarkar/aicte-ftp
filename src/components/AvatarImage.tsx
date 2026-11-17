"use client";

import React, { useState } from "react";
import Image from "next/image";
import PlaceholderAvatar from "./PlaceholderAvatar";

interface AvatarImageProps {
  src?: string;
  name: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  fill?: boolean;
}

export function normalizeImagePath(src?: string): string {
  if (!src) return "";
  let clean = src.trim();
  if (clean.startsWith("http://") || clean.startsWith("https://")) return clean;
  if (clean.startsWith("public/")) clean = clean.replace(/^public\//, "/");
  if (clean.startsWith("./")) clean = clean.replace(/^\.\//, "/");
  if (!clean.startsWith("/")) clean = `/${clean}`;
  return clean;
}

export default function AvatarImage({
  src,
  name,
  alt,
  imageClassName = "object-center",
  sizes = "128px",
}: AvatarImageProps) {
  const [hasError, setHasError] = useState(false);
  const normalizedSrc = normalizeImagePath(src);

  if (!normalizedSrc || hasError) {
    return <PlaceholderAvatar name={name} />;
  }

  return (
    <Image
      src={normalizedSrc}
      alt={alt || `Photograph of ${name}`}
      fill
      className={`object-cover ${imageClassName}`}
      sizes={sizes}
      onError={() => setHasError(true)}
    />
  );
}

