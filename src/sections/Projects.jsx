import React, { useState, useMemo } from "react";
import { FolderGit2, Filter } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const { projects, projectFilterCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((project) =>
      project.filterCategories.includes(selectedCategory)
    );
  }, [projects, selectedCategory]);

  return (
    <section id="projects" className="py-20 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-600 dark:text-sky-400 text-xs font-mono mb-2 border border-sky-500/20 shadow-xs">
            <FolderGit2 size={13} />
            <span>Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Selected academic and practical engineering projects demonstrating full-stack development, database architecture, compiler design, and systems engineering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-mono mr-2">
            <Filter size={14} />
            <span className="hidden sm:inline">Filter:</span>
          </div>
          {projectFilterCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono transition-all cursor-pointer ${
                  isSelected
                    ? "bg-linear-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/25 font-bold scale-[1.03]"
                    : "glass-card text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/30"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
