"use client";

import React, { useEffect, useRef } from "react";
import { SonarGrid } from "@/components/ui/sonar-grid";

export default function SonarBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleGlobalPointerDown = (e: PointerEvent) => {
      if (containerRef.current) {
        const customEvent = new PointerEvent("pointerdown", {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: false,
        });
        containerRef.current.dispatchEvent(customEvent);
      }
    };

    window.addEventListener("pointerdown", handleGlobalPointerDown, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", handleGlobalPointerDown);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none transition-colors duration-300"
    >
      <SonarGrid
        ref={containerRef}
        className="w-full h-full text-blue-600/35 dark:text-sky-400/35 pointer-events-none"
        color="currentColor"
        spacing={28}
        dotRadius={1.5}
        baseOpacity={0.52}
        pingEvery={2.8}
        speed={260}
        ringWidth={100}
        amplitude={2.2}
        interactive={true}
      />
      {/* Soft radial backdrop to maintain excellent typography contrast across all sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 30%, transparent 0%, var(--bg) 100%)",
          opacity: 0.25,
        }}
      />
    </div>
  );
}

