import React from "react";
import {
  Bot,
  Eye,
  Navigation,
  Database,
  Zap,
  Cpu,
  Layers,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { WORKSHOP_DATA } from "@/data/workshopData";

const iconMap: Record<string, React.ElementType> = {
  Bot, Eye, Navigation, Database, Zap, Cpu, Layers, Activity, CheckCircle2, Sparkles,
};

export default function TechnologyFocus() {
  return (
    <section
      id="focus"
      className="py-20 md:py-28 border-b bg-transparent border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="section-badge">
            <Bot className="w-3.5 h-3.5" />
            <span>AI &amp; Robotics Frontiers</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            Key Areas of Exploration
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Advanced AI &amp; Robotics disciplines covered across six instructional days of this AICTE–ATAL FDP.
          </p>
        </div>

        {/* AI/Robotics Banner */}
        <div className="mb-12 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-md flex flex-col sm:flex-row items-center gap-5">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shrink-0 shadow-md">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-blue-700 dark:text-cyan-400">
              AI Centre of Excellence (AI-CoE) · Department of Computer Science and Engineering
            </span>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white mt-0.5">
              From Intelligent Perception to Autonomous Decision Making
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Curriculum designed around AI-enabled robotic architectures, computer vision, UAV systems, robotic manipulation, and energy-aware autonomous platforms.
            </p>
          </div>
        </div>

        {/* Modules */}
        <div className="flex flex-wrap justify-center gap-6">
          {WORKSHOP_DATA.techFocus.map((tech, idx) => {
            const Icon = iconMap[tech.iconName] || Bot;
            return (
              <div
                key={idx}
                className="clean-card p-6 flex flex-col justify-between group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      Area {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {tech.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-[11px] uppercase tracking-wider">
                    {tech.tag}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500 font-mono text-[11px]">
                    AI · ROBOTICS
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
