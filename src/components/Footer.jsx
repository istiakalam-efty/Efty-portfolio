import React from "react";
import { ArrowUp, Terminal, Heart } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const footerLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md mt-20 transition-colors text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-200/50 dark:border-slate-800/60">
          {/* Brand & Identity */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold font-mono tracking-tight text-slate-900 dark:text-white">
                E<span className="text-gradient">fty</span>
                <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-sky-500 rounded-full"></span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
              {personal.title} &middot; Focused on software engineering, database systems, and practical development.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-5 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Socials + Back to Top */}
          <div className="md:col-span-2 flex items-center md:justify-end gap-3">
            <SocialLinks iconSize={16} />
            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Back to Top"
              className="p-2.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500/40 transition-all cursor-pointer shadow-xs"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {personal.year} {personal.fullName}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
