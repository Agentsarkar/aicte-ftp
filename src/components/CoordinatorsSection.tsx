"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Linkedin, Users } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";
import AvatarImage from "@/components/AvatarImage";

export default function CoordinatorsSection() {
  return (
    <section
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Users className="w-3.5 h-3.5" />
            <span>Programme Coordinators</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            FDP Coordinators
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Official coordinators of the AICTE–ATAL FDP on AI-enabled Robotic Systems at the AI Centre of Excellence, Adamas University.
          </p>
        </div>

        {/* 2 Coordinator Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {WORKSHOP_DATA.coordinators.map((c: any, idx: number) => (
            <div
              key={idx}
              className="clean-card p-6 sm:p-8 flex flex-col items-center text-center group"
            >
              {/* Photo */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-sm ring-4 ring-white dark:ring-slate-800 shrink-0 mb-4 bg-slate-100 dark:bg-slate-800">
                <AvatarImage
                  src={c.image}
                  name={c.name}
                  imageClassName={c.imageClassName}
                  sizes="128px"
                />
              </div>

              {/* Role badge */}
              <span className="inline-block text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 mb-2">
                {c.role} · AI-CoE, CSE
              </span>

              {/* Name */}
              <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                {c.name}
              </h3>
              <p className="text-xs text-blue-700 dark:text-blue-400 font-semibold mt-1">
                {c.designation}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                {c.organization}
              </p>

              {/* LinkedIn */}
              {c.linkedIn && (
                <div className="w-full mt-6 pt-5 border-t border-slate-100 dark:border-white/5">
                  <Link
                    href={c.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
