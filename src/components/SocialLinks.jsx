import React from "react";
import { GithubIcon, LinkedinIcon, XTwitterIcon } from "./BrandIcons";
import { portfolioData } from "../data/portfolio";

export default function SocialLinks({ className = "", iconSize = 18, showLabels = false }) {
  const { socialLinks } = portfolioData;

  const items = [
    {
      name: socialLinks.github.name,
      url: socialLinks.github.url,
      icon: GithubIcon,
      hoverClass: "hover:text-sky-500 hover:border-sky-500/50 hover:bg-sky-500/10",
      ariaLabel: `Visit ${portfolioData.personal.fullName}'s GitHub profile`
    },
    {
      name: socialLinks.linkedin.name,
      url: socialLinks.linkedin.url,
      icon: LinkedinIcon,
      hoverClass: "hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10",
      ariaLabel: `Visit ${portfolioData.personal.fullName}'s LinkedIn profile`
    },
    {
      name: socialLinks.x.name,
      url: socialLinks.x.url,
      icon: XTwitterIcon,
      hoverClass: "hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10",
      ariaLabel: `Visit ${portfolioData.personal.fullName}'s X profile`
    }
  ];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {items.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className="flex items-center gap-2 p-2.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 transition-all duration-200 backdrop-blur-xs shadow-xs hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-500/40 hover:scale-105"
          >
            <IconComponent size={iconSize} />
            {showLabels && <span className="text-xs font-semibold pr-1">{item.name}</span>}
          </a>
        );
      })}
    </div>
  );
}
