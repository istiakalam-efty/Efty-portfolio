import React from "react";
import { GraduationCap, Calendar, BookOpen, Award } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-600 dark:text-sky-400 text-xs font-mono mb-2 border border-sky-500/20 shadow-xs">
            <GraduationCap size={13} />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal academic studies in Computer Science and Engineering, foundational coursework, and academic milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-sky-500/30 dark:border-sky-500/20 ml-4 md:ml-6 space-y-12">
          {education.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-10 text-left">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[13px] top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-white dark:bg-slate-950 ${
                  item.current
                    ? "border-sky-500 text-sky-500 ring-4 ring-sky-500/20 shadow-md shadow-sky-500/30"
                    : "border-slate-400 dark:border-slate-600 text-slate-400"
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${item.current ? "bg-sky-500 animate-ping" : "bg-slate-400"}`} />
              </div>

              {/* Card */}
              <div className="rounded-3xl glass-card p-6 sm:p-7 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className={`text-xs font-mono px-3 py-0.5 rounded-full border ${
                    item.current
                      ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30 font-semibold"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
                  }`}>
                    {item.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <Calendar size={13} />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {item.degree}
                </h3>
                <div className="text-sm font-medium text-sky-600 dark:text-sky-400 font-mono mt-0.5 mb-3">
                  {item.institution}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Relevant Coursework */}
                {item.relevantCoursework && item.relevantCoursework.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-slate-400 dark:text-slate-500">
                      <BookOpen size={13} />
                      <span>Key Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.relevantCoursework.map((course) => (
                        <span
                          key={course}
                          className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements if any */}
                {item.achievements && item.achievements.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold uppercase text-slate-400 dark:text-slate-500 mb-1.5">
                      <Award size={13} />
                      <span>Academic Highlights</span>
                    </div>
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
