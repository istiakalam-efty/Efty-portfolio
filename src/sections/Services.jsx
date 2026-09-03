import React from "react";
import { Globe, Layers, Database, Cpu, BookOpen, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Services() {
  const { services } = portfolioData;

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case "Globe":
        return <Globe size={22} className="text-sky-500" />;
      case "Layers":
        return <Layers size={22} className="text-indigo-500" />;
      case "Database":
        return <Database size={22} className="text-amber-500" />;
      case "Cpu":
        return <Cpu size={22} className="text-emerald-500" />;
      case "BookOpen":
      default:
        return <BookOpen size={22} className="text-purple-500" />;
    }
  };

  return (
    <section id="services" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-600 dark:text-sky-400 text-xs font-mono mb-2 border border-sky-500/20 shadow-xs">
            <Sparkles size={13} />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            What I Do
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Specialized technical domains where I design, engineer, and build software solutions with attention to performance, architecture, and code quality.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="rounded-3xl glass-card p-6 sm:p-7 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group hover:border-sky-500/40"
            >
              <div>
                <div className="p-3 w-fit rounded-2xl bg-linear-to-tr from-sky-500/10 to-indigo-500/15 border border-sky-500/20 mb-4 group-hover:scale-110 transition-transform">
                  {getServiceIcon(srv.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/50 dark:border-slate-800/60 flex items-center justify-between text-xs text-sky-600 dark:text-sky-400 font-mono font-bold">
                <span>0{services.indexOf(srv) + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
