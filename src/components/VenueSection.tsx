import React from "react";
import Image from "next/image";
import { MapPin, Globe, ExternalLink, Building2 } from "lucide-react";

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="py-20 md:py-28 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Globe className="w-3.5 h-3.5" />
            <span>Mode &amp; Organising Institution</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Online FDP &amp; Host Campus
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            This FDP is conducted entirely online. It is organised by the AI Centre of Excellence, Dept. of CSE, Adamas University, Kolkata.
          </p>
        </div>

        {/* Venue Showcase Card */}
        <div className="clean-card p-6 sm:p-10 mb-10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Campus Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 aspect-[4/3] group">
                <Image
                  src="/images/campus-aerial.png"
                  alt="Adamas University Campus"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 text-white">
                  <span className="text-[11px] font-mono uppercase text-sky-300 font-semibold block mb-0.5">
                    Host Institution
                  </span>
                  <p className="font-display font-bold text-sm sm:text-base">
                    Adamas Knowledge City, Barasat, Kolkata
                  </p>
                </div>
              </div>
            </div>

            {/* Venue Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-widest block mb-1">
                  ONLINE FDP — ORGANISING INSTITUTION
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                  Adamas University
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  AI Centre of Excellence (AI-CoE) · Dept. of CSE
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 space-y-2">
                <div className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">Barasat – Barrackpore Road, Jagannathpur</p>
                    <p>Kolkata, West Bengal – 700126, India</p>
                    <p className="text-xs text-blue-700 dark:text-blue-400 font-mono mt-1">13 km from Netaji Subhash Chandra Bose International Airport (CCU)</p>
                  </div>
                </div>
              </div>

              {/* Online Mode Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/5 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                    <Globe className="w-4 h-4" />
                    <span className="font-display font-bold text-xs text-slate-900 dark:text-white">
                      Online Mode
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    All six instructional days are conducted via live online sessions accessible from anywhere.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-white/5 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-1.5 text-blue-600 dark:text-blue-400">
                    <Building2 className="w-4 h-4" />
                    <span className="font-display font-bold text-xs text-slate-900 dark:text-white">
                      AICTE–ATAL Sponsored
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    Fully sponsored by AICTE–ATAL with free registration and official e-Certificate.
                  </p>
                </div>
              </div>

              {/* Website CTA */}
              <div className="pt-2">
                <a
                  href="https://adamasuniversity.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 transition-all"
                >
                  <span>Visit Adamas University</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
