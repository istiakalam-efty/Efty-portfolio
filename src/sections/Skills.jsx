import React from "react";
import { Terminal } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-600 dark:text-sky-400 text-xs font-mono mb-2 border border-sky-500/20 shadow-xs">
            <Terminal size={13} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Practical skills, programming languages, modern frameworks, and computer science concepts acquired through academic study and engineering projects.
          </p>
        </div>

        {/* Skills Grid - 6 Organized Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((categoryGroup) => (
            <SkillCard
              key={categoryGroup.category}
              category={categoryGroup.category}
              skills={categoryGroup.skills}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
