import React from "react";
import { Bot, Eye, Navigation, Layers, Sparkles, Network, ArrowRight, CheckCircle2 } from "lucide-react";

const PILLARS = [
  {
    icon: Bot,
    title: "AI-enabled Robotics & Intelligent Control",
    description:
      "Deep dive into autonomous robotic architectures, intelligent control loops, sensor fusion, and AI-powered decision systems for real-world deployment.",
    tag: "TRACK 01 // AI & CONTROL",
  },
  {
    icon: Eye,
    title: "Computer Vision & Robotic Perception",
    description:
      "Machine vision pipelines, object detection, scene understanding, localisation techniques, and perception-based navigation for autonomous robots.",
    tag: "TRACK 02 // PERCEPTION",
  },
  {
    icon: Navigation,
    title: "UAVs, Drones & Autonomous Flight",
    description:
      "UAV electronics, intelligent flight control, autonomous drone navigation, multibody dynamics, and drone manufacturing & deployment pathways.",
    tag: "TRACK 03 // DRONES & UAVs",
  },
  {
    icon: Network,
    title: "Planning, Decision Making & Industry",
    description:
      "AI-driven planning algorithms, decision-making frameworks, big data analytics for robotics, edge computing, and academic–industry linkages.",
    tag: "TRACK 04 // PLANNING & INDUSTRY",
  },
];

export default function AboutWorkshop() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic &amp; Technical Scope</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            About the FDP
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The six-day online FDP on{" "}
            <strong className="text-slate-900 dark:text-white font-semibold">
              &ldquo;AI-enabled Robotic System: Planning, Control and Decision Making&rdquo;
            </strong>
            , scheduled for{" "}
            <strong className="text-blue-700 dark:text-blue-400">28 November – 04 December 2026</strong>, brings together academic, international and industry expertise.
          </p>
        </div>

        {/* Narrative Block */}
        <div className="clean-card p-6 sm:p-10 mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              As{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">Artificial Intelligence</strong>{" "}
              continues to reshape robotics and autonomous technologies, the integration of{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">perception, intelligent planning, control</strong> and{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">decision-making</strong> has become increasingly important.
            </p>
            <p>
              This FDP aims to bring together faculty members, researchers, postgraduate scholars and industry professionals to explore the evolving landscape of AI-enabled robotic systems. The programme brings together experts from leading academic institutions, international universities and industry organisations, including IIT Kharagpur, IIT Jodhpur, University of Liverpool (UK), Western Norway University of Applied Sciences, TCS, FLAME University and other technology organisations.
            </p>
            <p>
              Through expert-led sessions, research perspectives and industry-oriented discussions, the FDP seeks to encourage interdisciplinary collaboration and strengthen research and teaching capabilities in AI and Robotics.
            </p>
          </div>

          {/* Quick Highlights Box */}
          <div className="p-5 sm:p-6 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-3">
                Key Highlights
              </span>
              <ul className="space-y-3">
                {[
                  "Expert panel from IIT Kharagpur, IIT Jodhpur, University of Liverpool (UK)",
                  "Western Norway University, TCS, FLAME University & more",
                  "Official AICTE–ATAL E-Certificate (≥80% attendance)",
                  "Free online participation — open to all eligible applicants",
                ].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PILLARS.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="clean-card p-6 flex flex-col justify-between group">
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    {p.tag}
                  </span>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
