import React from "react";
import {
  Bot, Eye, Navigation, Zap, Cpu, Layers, Activity, Database,
  BookOpen, Network,
} from "lucide-react";

const DOMAINS = [
  { name: "AI & Machine Learning", icon: Cpu },
  { name: "Robotics & Autonomous Systems", icon: Bot },
  { name: "Computer Vision", icon: Eye },
  { name: "Big Data & Analytics", icon: Database },
  { name: "Drone Technology & UAVs", icon: Navigation },
  { name: "Edge Computing & IoT", icon: Layers },
  { name: "Intelligent Planning", icon: Activity },
  { name: "NLP & AI Systems", icon: Network },
  { name: "Cybersecurity & Safety", icon: Zap },
  { name: "Embedded AI Systems", icon: Cpu },
  { name: "Research & Innovation", icon: BookOpen },
  { name: "Industry Collaboration", icon: Bot },
];

const PEDAGOGIES = [
  { title: "AI & Robotics Research", desc: "Cutting-edge research in autonomous systems, computer vision, and intelligent control." },
  { title: "Industry Collaborations", desc: "Active partnerships with TCS, IGUS, Glacien Technologies, Flora Systems and more." },
  { title: "International Linkages", desc: "Collaborations with University of Liverpool, Western Norway University of Applied Sciences." },
  { title: "Publications & Projects", desc: "High-impact research publications, patents, and interdisciplinary AI/Robotics projects." },
];

export default function AboutDepartment() {
  return (
    <section
      className="py-20 md:py-28 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Cpu className="w-3.5 h-3.5" />
            <span>Organising Unit</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            AI Centre of Excellence (AI-CoE)
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Department of Computer Science and Engineering · Adamas University, Kolkata
          </p>
        </div>

        {/* Narrative Block */}
        <div className="clean-card p-6 sm:p-10 mb-12 max-w-4xl mx-auto space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-center sm:text-left">
          <p>
            The <strong className="text-slate-900 dark:text-white font-semibold">AI Centre of Excellence (AI-CoE)</strong> at the Department of Computer Science and Engineering, Adamas University, is committed to advancing research and education in Artificial Intelligence, Robotics, Computer Vision, Autonomous Systems, and related emerging technologies.
          </p>
          <p>
            The Centre actively promotes interdisciplinary collaboration, faculty development, and industry–academia partnerships. It has established connections with leading national and international institutions and technology companies to facilitate research, advanced knowledge exchange, and the development of AI-driven solutions for real-world challenges.
          </p>
          <p>
            Through initiatives like AICTE–ATAL sponsored FDPs, the Centre aims to empower faculty members, researchers, and scholars across India with the knowledge and skills needed to advance the frontiers of AI and Robotics.
          </p>
        </div>

        {/* Domain Grid */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              CORE FIELDS OF APPLICATION
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {DOMAINS.map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className="clean-card p-4 flex flex-col items-center text-center gap-2 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-tight">
                    {d.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Pedagogical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PEDAGOGIES.map((p, i) => (
            <div key={i} className="clean-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-blue-700 dark:text-blue-400 font-bold block mb-2">
                  {`0${i + 1} // FOCUS`}
                </span>
                <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                  {p.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
