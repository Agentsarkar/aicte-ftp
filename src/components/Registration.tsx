"use client";

import React, { useState } from "react";
import { ExternalLink, Award, CheckCircle2, Key } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";

export default function Registration() {
  const [copied, setCopied] = useState(false);

  const specs = [
    { label: "Duration", value: "6 Days", sub: "28 Nov – 04 Dec 2026" },
    { label: "Registration Fee", value: "NIL (Free)", sub: "100% Sponsored" },
    { label: "Last Date", value: "25 Nov 2026", sub: "Final Deadline" },
    { label: "Delivery Mode", value: "Online", sub: "Live Interactive" },
    { label: "Organiser", value: "AI-CoE, CSE", sub: "Adamas University" },
    { label: "Certification", value: "AICTE–ATAL", sub: "Official e-Certificate" },
  ];

  return (
    <section
      id="registration"
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Key className="w-3.5 h-3.5" />
            <span>Admission &amp; Enrollment</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Registration Information
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Official application procedure via AICTE ATAL Academy Portal
          </p>
        </div>

        {/* Main Enrollment Card */}
        <div className="clean-card p-6 sm:p-10 mb-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>OFFICIAL PORTAL ENROLLMENT OPEN</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-snug">
                Apply Exclusively via AICTE ATAL Academy Portal
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                As per official AICTE–ATAL guidelines, registration is allowed{" "}
                <strong className="text-slate-900 dark:text-white font-semibold">only through the ATAL Academy portal</strong>. The FDP is free and open to all eligible faculty members, researchers, postgraduate scholars and industry professionals.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={WORKSHOP_DATA.registration.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-bold text-sm uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all"
                >
                  <span>LOGIN TO ATAL PORTAL</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={WORKSHOP_DATA.registration.participantUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-xs sm:text-sm uppercase tracking-wider text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-white/10 shadow-xs transition-all"
                >
                  <span>Sign Up &amp; Register for FDP</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Certification Criteria */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/40 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-700 dark:text-blue-300">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  Certification Criteria
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  &ldquo;{WORKSHOP_DATA.registration.certificateNote}&rdquo;
                </p>
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-blue-700 dark:text-blue-300 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Officially Verified AICTE–ATAL Digital Credential</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Specs Grid */}
          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-white/5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {specs.map((s, idx) => (
              <div key={idx} className="text-center">
                <p className="font-display font-extrabold text-base sm:text-lg text-blue-700 dark:text-blue-400">
                  {s.value}
                </p>
                <p className="font-display font-semibold text-xs text-slate-900 dark:text-white mt-0.5">
                  {s.label}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Portal Workflow */}
        <div className="clean-card p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-100 dark:border-white/5">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1.5">
                <span>Guided Walkthrough</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
                Steps to Register on ATAL Portal
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Follow these 5 simple steps to submit your official application before the 25 Nov deadline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {WORKSHOP_DATA.stepsToRegister.map((step: any, idx: number) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between hover:border-blue-400/60 dark:hover:border-blue-500/60 transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-display font-extrabold text-xs flex items-center justify-center ring-2 ring-blue-500/10">
                      {String(step.step).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-mono font-semibold uppercase text-slate-400 dark:text-slate-500">
                      Step {step.step}
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/60 dark:border-white/5">
                  {idx === 0 && (
                    <a
                      href={WORKSHOP_DATA.registration.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Open ATAL Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {idx === 2 && (
                    <a
                      href={WORKSHOP_DATA.registration.participantUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span>Go to FDP Catalog</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
