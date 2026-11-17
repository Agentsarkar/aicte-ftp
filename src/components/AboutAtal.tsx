import React from "react";
import Image from "next/image";
import { BookOpen, Globe2, Layers, Award } from "lucide-react";

const COMMITMENTS = [
  {
    icon: BookOpen,
    title: "AI & Robotics Education",
    desc: "Advancing faculty knowledge in AI-enabled robotic systems, intelligent control, and autonomous technologies through structured academic programmes.",
  },
  {
    icon: Globe2,
    title: "International Collaboration",
    desc: "Fostering partnerships with leading international universities and research organisations for cutting-edge research in AI and Autonomous Systems.",
  },
  {
    icon: Layers,
    title: "Industry–Academia Bridge",
    desc: "Connecting academic institutions with leading technology companies and industry practitioners to bridge the gap between theory and real-world deployment.",
  },
  {
    icon: Award,
    title: "Faculty Development",
    desc: "Empowering faculty members, researchers and scholars with updated skills and knowledge to strengthen teaching and research capabilities.",
  },
];

export default function AboutAtal() {
  return (
    <section
      className="py-20 md:py-28 border-b bg-slate-50/20 dark:bg-white/[0.015] border-slate-200/60 dark:border-white/8 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Centered Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="section-badge">
            <Award className="w-3.5 h-3.5" />
            <span>National Scheme · Government of India</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            AICTE – ATAL Scheme
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            AICTE Training and Learning Academy — Pioneering faculty development and academic excellence across India.
          </p>
        </div>

        {/* Narrative & Emblem Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Left Column: Official Scheme Charter */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/70 dark:border-blue-900/40">
              <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-300 font-medium">
                <strong>ATAL:</strong> AICTE Training and Learning Academy — A flagship initiative for faculty development in technical education.
              </p>
            </div>
            <p>
              All India Council for Technical Education (AICTE) is committed to the development of quality technical education in the country by initiating various schemes launched by the Government of India.
            </p>
            <p>
              The <strong className="text-slate-900 dark:text-white font-semibold">AICTE–ATAL scheme</strong> sponsors Faculty Development Programmes (FDPs) to enhance the academic and research capabilities of faculty members across AICTE-approved institutions. It promotes interdisciplinary learning, emerging technology awareness, and industry–academia collaboration.
            </p>
            <p>
              This FDP on AI-enabled Robotic Systems is sponsored under the AICTE–ATAL initiative, with the goal of equipping faculty with cutting-edge knowledge in AI, Robotics, Autonomous Systems, and Decision Making.
            </p>
          </div>

          {/* Right Column: AICTE Emblem */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start lg:items-center">
            <div className="clean-card p-6 w-full max-w-sm flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/90 dark:bg-slate-800/80 p-2 shadow-sm border border-slate-200/80 dark:border-white/10 shrink-0 flex items-center justify-center">
                <Image
                  src="/images/aicte-logo.png"
                  alt="AICTE Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-snug">
                  All India Council for Technical Education
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Statutory Body, Ministry of Education, Govt. of India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {COMMITMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="clean-card p-6 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-base text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
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

