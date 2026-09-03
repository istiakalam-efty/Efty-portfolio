import React from "react";
import { Briefcase, CheckCircle2, Calendar } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-600 dark:text-sky-400 text-xs font-mono mb-2 border border-sky-500/20 shadow-xs">
            <Briefcase size={13} />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Academic & Project Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Hands-on technical implementation experience acquired through rigorous academic projects, system architecture development, and problem solving.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl glass-card p-6 sm:p-7 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group hover:border-sky-500/40"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-bold">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs font-mono">
                    <Calendar size={13} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase font-semibold text-slate-400 dark:text-slate-500 mb-2">
                    Key Competencies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
