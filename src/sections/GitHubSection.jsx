import React from "react";
import { Code2, ExternalLink, GitBranch, Terminal } from "lucide-react";
import { GithubIcon } from "../components/BrandIcons";
import { portfolioData } from "../data/portfolio";
import Button from "../components/Button";

export default function GitHubSection() {
  const { socialLinks } = portfolioData;
  const username = socialLinks.github.username;

  return (
    <section className="py-16 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-card p-8 sm:p-10 shadow-2xl overflow-hidden text-left border border-white/20 dark:border-white/10">
          
          {/* Decorative code pattern */}
          <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 pointer-events-none hidden md:block text-sky-500">
            <Terminal size={140} />
          </div>

          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-sky-600 dark:text-sky-400 text-xs font-mono border border-sky-500/20 shadow-xs">
              <GithubIcon size={14} />
              <span>github.com/{username}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Explore My Code
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore my repositories, academic experiments, compiler modules, and practical development work on GitHub. All projects follow clean git commit standards, modular folder structuring, and documented specifications.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon size={16} />
                <span>Visit GitHub Profile</span>
                <ExternalLink size={14} />
              </Button>

              <a
                href={`${socialLinks.github.url}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 p-2 flex items-center gap-1.5 transition-colors"
              >
                <GitBranch size={14} />
                <span>View Public Repositories</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
