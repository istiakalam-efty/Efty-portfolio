import React from "react";
import { User, Code, Layers, Calendar, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const { personal, highlights } = portfolioData;

  const getHighlightIcon = (label) => {
    switch (label) {
      case "Featured Projects":
        return <Code size={20} className="text-sky-500" />;
      case "Technologies":
        return <Layers size={20} className="text-indigo-500" />;
      case "Academic Standing":
        return <GraduationCap size={20} className="text-emerald-500" />;
      case "Portfolio Year":
      default:
        return <Calendar size={20} className="text-purple-500" />;
    }
  };

  return (
    <section id="about" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-sky-600 dark:text-sky-400 text-xs font-mono mb-2 border border-sky-500/20 shadow-xs">
            <User size={13} />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed text-left">
            {personal.aboutLong.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <div className="p-5 rounded-2xl glass-card font-mono text-xs text-slate-700 dark:text-slate-300 space-y-2.5">
                <div className="text-sky-600 dark:text-sky-400 font-semibold">// Core Academic & Practical Interests:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800 dark:text-slate-200">
                  <div className="flex items-center gap-1.5"><span className="text-sky-500">&bull;</span> Web Application Architecture</div>
                  <div className="flex items-center gap-1.5"><span className="text-indigo-500">&bull;</span> Database-Driven Systems</div>
                  <div className="flex items-center gap-1.5"><span className="text-purple-500">&bull;</span> Compiler Design & AST Analysis</div>
                  <div className="flex items-center gap-1.5"><span className="text-emerald-500">&bull;</span> Transport & Resource Optimization</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Verified Metrics Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl glass-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-2.5 w-fit rounded-xl bg-sky-500/10 dark:bg-sky-500/15 mb-3 group-hover:scale-110 transition-transform">
                  {getHighlightIcon(item.label)}
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
