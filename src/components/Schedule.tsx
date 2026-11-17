"use client";

import React, { useState } from "react";
import { Calendar, Clock, User, Building2 } from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<number>(0);
  const days = WORKSHOP_DATA.schedule.days;
  const currentSchedule = days[activeDay];

  const dayLabels = [
    { day: 1, date: "28 Nov", label: "Day 1" },
    { day: 2, date: "30 Nov", label: "Day 2" },
    { day: 3, date: "01 Dec", label: "Day 3" },
    { day: 4, date: "02 Dec", label: "Day 4" },
    { day: 5, date: "03 Dec", label: "Day 5" },
    { day: 6, date: "04 Dec", label: "Day 6" },
  ];

  return (
    <section
      id="schedule"
      className="py-20 md:py-28 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="section-badge">
            <Clock className="w-3.5 h-3.5" />
            <span>Conference Programme</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Six-Day Programme Schedule
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Six instructional days from 28 November – 04 December 2026 (Sunday 29 Nov is a non-instructional day).
          </p>
        </div>

        {/* Day Tab Selector */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 gap-1.5">
            {dayLabels.map((d, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveDay(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
                  activeDay === idx
                    ? "bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{d.label} · {d.date}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Day Subtitle Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 mb-6 border-b border-slate-200 dark:border-white/10 text-left gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-sky-400">
                {currentSchedule?.date}
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {currentSchedule?.dayLabel}
              </span>
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900 dark:text-white mt-1">
              {currentSchedule?.theme}
            </h3>
          </div>
          <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 shrink-0">
            {currentSchedule?.sessions?.length || 0} Scheduled Segments
          </span>
        </div>

        {/* Schedule Rows Stack */}
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xs">
          {currentSchedule?.sessions?.map((session, idx) => {
            const isSpecial =
              session.isSpecial ||
              session.sessionNumber.toLowerCase().includes("lunch") ||
              session.sessionNumber.toLowerCase().includes("evaluation") ||
              session.sessionNumber.toLowerCase().includes("valedictory") ||
              session.sessionNumber.toLowerCase().includes("inaugur") ||
              session.sessionNumber.toLowerCase().includes("test") ||
              session.sessionNumber.toLowerCase().includes("feedback");

            return (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row sm:items-start gap-4 p-5 sm:p-6 border-b last:border-b-0 border-slate-100 dark:border-white/5 transition-colors ${
                  idx % 2 === 0
                    ? "bg-white dark:bg-[#0f172a]"
                    : "bg-slate-50/70 dark:bg-[#090d16]"
                }`}
              >
                {/* Time & Session badge */}
                <div className="sm:w-48 shrink-0 flex sm:flex-col gap-2 sm:gap-1.5 items-start">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                      {session.time}
                    </span>
                  </div>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase ${
                      isSpecial
                        ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10"
                        : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"
                    }`}
                  >
                    {session.sessionNumber}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-base sm:text-lg text-slate-900 dark:text-white leading-snug mb-2">
                    {session.topic}
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                      <span className="font-medium text-slate-800 dark:text-slate-200">
                        {session.speakerName}
                      </span>
                    </div>
                    {session.speakerOrganization && (
                      <div className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                        <span>{session.speakerOrganization}</span>
                      </div>
                    )}
                  </div>
                  {session.speakerDesignation && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      {session.speakerDesignation}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Intervening Day Official AICTE Note */}
        <div className="mt-8 p-4 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
            <span className="font-bold text-blue-700 dark:text-cyan-400 font-mono uppercase tracking-wider text-[11px] mr-2">
              Note:
            </span>
            29/11/2026 is kept as an intervening non-instructional day. The six instructional days are 28/11 and 30/11–04/12/2026.
          </p>
        </div>
      </div>
    </section>
  );
}
