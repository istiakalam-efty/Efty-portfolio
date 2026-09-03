import React from "react";
import { Terminal, Layout, Server, Database, Wrench, Binary } from "lucide-react";

export default function SkillCard({ category, skills }) {
  const getCategoryIcon = (cat) => {
    switch (cat) {
      case "Programming Languages":
        return <Binary size={18} className="text-emerald-500" />;
      case "Frontend Development":
        return <Layout size={18} className="text-sky-500" />;
      case "Backend Development":
        return <Server size={18} className="text-indigo-500" />;
      case "Database":
        return <Database size={18} className="text-amber-500" />;
      case "Tools & Platforms":
        return <Wrench size={18} className="text-rose-500" />;
      case "Computer Science":
      default:
        return <Terminal size={18} className="text-purple-500" />;
    }
  };

  return (
    <div className="rounded-2xl glass-card p-5.5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group hover:border-sky-500/40">
      <div>
        <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-200/50 dark:border-slate-800/60">
          <div className="p-2.5 rounded-xl bg-linear-to-tr from-sky-500/10 to-indigo-500/15 text-sky-600 dark:text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
            {getCategoryIcon(category)}
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {category}
          </h3>
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center text-xs font-mono px-3 py-1.5 rounded-lg bg-white/70 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/60 group-hover:border-sky-500/30 transition-all backdrop-blur-xs shadow-2xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
