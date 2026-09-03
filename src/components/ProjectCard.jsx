import React, { useState } from "react";
import { ExternalLink, Calendar, Code, CheckCircle, Info } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import Button from "./Button";

export default function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  const getAccentStyles = (accent) => {
    switch (accent) {
      case "rose":
        return {
          border: "hover:border-rose-500/60",
          tag: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30",
          glow: "hover:shadow-rose-500/15"
        };
      case "indigo":
        return {
          border: "hover:border-indigo-500/60",
          tag: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
          glow: "hover:shadow-indigo-500/15"
        };
      case "cyan":
      default:
        return {
          border: "hover:border-sky-500/60",
          tag: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30",
          glow: "hover:shadow-sky-500/15"
        };
    }
  };

  const accentStyles = getAccentStyles(project.accentColor);

  return (
    <>
      <div className={`group relative rounded-3xl glass-card p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${accentStyles.border} overflow-hidden text-left`}>
        <div>
          {/* Project Image Banner */}
          {project.image && (
            <div
              onClick={() => setShowModal(true)}
              className="relative w-full h-44 sm:h-48 mb-4 rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 bg-slate-950 cursor-pointer shadow-inner"
            >
              <img
                src={project.image}
                alt={`${project.title} Preview`}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-[11px] font-mono text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md">
                  Click to inspect &rarr;
                </span>
              </div>
            </div>
          )}

          {/* Top metadata */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className={`text-[11px] font-mono uppercase tracking-wider px-3 py-0.5 rounded-full border ${accentStyles.tag}`}>
              {project.category}
            </span>
            <div className="flex items-center gap-1 text-slate-400 dark:text-slate-500 text-xs font-mono">
              <Calendar size={13} />
              <span>{project.year}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Key Features Preview */}
          <div className="mb-5 space-y-1.5 border-t border-slate-100 dark:border-slate-800/65 pt-3.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
              Core Highlights
            </span>
            <ul className="space-y-1 mt-1">
              {project.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </li>
              ))}
            </ul>
            {project.features.length > 3 && (
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-[11px] text-sky-600 dark:text-sky-400 font-semibold hover:underline inline-flex items-center gap-1 mt-1 cursor-pointer"
              >
                + {project.features.length - 3} more features
              </button>
            )}
          </div>
        </div>

        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/70 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs backdrop-blur-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
            {project.githubUrl ? (
              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-xs"
              >
                <GithubIcon size={14} />
                Repository
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowModal(true)}
                className="flex-1 text-xs opacity-75"
              >
                <Code size={14} />
                Details
              </Button>
            )}

            {project.demoUrl ? (
              <Button
                variant="primary"
                size="sm"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-xs"
              >
                <ExternalLink size={14} />
                Live Demo
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowModal(true)}
                className="flex-1 text-xs"
              >
                <Info size={14} />
                Overview
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Inspection Modal with Frosted Glass styling */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-white/10 text-left"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-200/60 dark:border-slate-800/60">
              <div>
                <span className={`text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border ${accentStyles.tag}`}>
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-2">
                  {project.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
                className="p-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                &times;
              </button>
            </div>

            {/* Modal Image */}
            {project.image && (
              <div className="w-full h-56 sm:h-64 mb-6 rounded-2xl overflow-hidden border border-white/20 dark:border-white/10 shadow-inner">
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            {/* Full Narrative Description */}
            <div className="space-y-4 mb-6">
              <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
                System Overview
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Key Features Complete List */}
            <div className="space-y-3 mb-6">
              <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
                Key Features & Engineering Deliverables
              </h3>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Applied */}
            <div className="space-y-3 mb-6">
              <h3 className="text-sm font-bold font-mono text-slate-900 dark:text-white uppercase tracking-wider">
                Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-sky-500/10 dark:bg-sky-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/25"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-end gap-3">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setShowModal(false)}
              >
                Close
              </Button>

              {project.githubUrl && (
                <Button
                  variant="primary"
                  size="sm"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={14} />
                  <span>View Repository</span>
                </Button>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
