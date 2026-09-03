import React, { useState, useEffect } from "react";
import { ArrowRight, Mail, FileText, Sparkles, Terminal, Code2, GraduationCap, Cpu } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";

export default function Hero() {
  const { personal } = portfolioData;
  const [resumeNotice, setResumeNotice] = useState(false);

  // Typing animation for developer titles matching reference design
  const roles = [
    "Computer Science & Engineering Student",
    "Software Developer",
    "Problem Solver"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 40 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  const handleResumeClick = (e) => {
    if (!personal.resumeAvailable) {
      e.preventDefault();
      setResumeNotice(true);
      setTimeout(() => setResumeNotice(false), 5000);
    }
  };

  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Subtle Developer Motif Background Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#d97706 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-mono border border-sky-500/30 text-sky-700 dark:text-sky-300 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span>Open to collaborate &middot; CSE Student &middot; 2026</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Ahammed Istiak Alam <span className="text-gradient">Efty</span>
              </h1>
              
              {/* Typing hero role */}
              <div className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex items-center min-h-[2.2rem]">
                <span>I'm a&nbsp;</span>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 via-indigo-500 to-purple-600 font-mono font-bold">
                  {currentText}
                </span>
                <span className="inline-block w-0.5 h-6 ml-1 bg-sky-500 animate-pulse"></span>
              </div>
            </div>

            {/* Short Professional Introduction */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {personal.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                href="#projects"
                className="group"
              >
                <span>View My Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="#contact"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </Button>

              <Button
                variant="outline"
                size="md"
                href={personal.resumeUrl}
                download="Ahammed-Istiak-Alam-Efty-CV.pdf"
                onClick={handleResumeClick}
                className="group"
              >
                <FileText size={16} />
                <span>Download Resume</span>
              </Button>
            </div>

            {/* Resume Notice */}
            {resumeNotice && (
              <div className="p-3 rounded-2xl border border-sky-500/30 bg-sky-500/10 text-sky-900 dark:text-sky-300 text-xs font-mono animate-in fade-in duration-150">
                Notice: The resume path is configured at <code className="bg-sky-500/20 px-1 py-0.5 rounded">{personal.resumeUrl}</code>. Place your official PDF resume there to enable direct download.
              </div>
            )}

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center gap-4 border-t border-slate-200/80 dark:border-slate-800/80">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Official Profiles
              </span>
              <SocialLinks iconSize={16} />
            </div>
          </div>

          {/* Right Column: Profile Picture with Glass Badge Chips */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Vibrant Ambient Glow behind avatar */}
              <div className="absolute -inset-3 rounded-3xl bg-linear-to-tr from-sky-500/30 via-indigo-500/20 to-purple-500/30 blur-2xl -z-10 opacity-70"></div>

              {/* Main Profile Frame */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-3 shadow-xl">
                <div className="rounded-2xl overflow-hidden aspect-square bg-slate-100 dark:bg-slate-800 relative">
                  <img
                    src={personal.photoUrl}
                    alt={personal.fullName}
                    className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Active Status Badge in Photo */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Daffodil Smart City</span>
                    </span>
                    <span className="opacity-75">SWE / CSE</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge Chip 1 (Top Left) */}
              <div className="absolute -top-3 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl glass-card shadow-lg flex items-center gap-2.5 border border-sky-400/30 animate-soft-float">
                <div className="w-7 h-7 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-500 text-xs">
                  <Cpu size={15} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-mono text-sky-600 dark:text-sky-400 leading-none">Focus</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Software Dev</div>
                </div>
              </div>

              {/* Floating Badge Chip 2 (Center Right) */}
              <div className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 px-3.5 py-2 rounded-2xl glass-card shadow-lg flex items-center gap-2.5 border border-indigo-400/30 animate-soft-float-delayed">
                <div className="w-7 h-7 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-500 text-xs">
                  <GraduationCap size={15} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-mono text-indigo-600 dark:text-indigo-400 leading-none">Degree</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">CSE Student</div>
                </div>
              </div>

              {/* Floating Badge Chip 3 (Bottom Left) */}
              <div className="absolute -bottom-3 -left-3 sm:-left-5 px-3.5 py-2 rounded-2xl glass-card shadow-lg flex items-center gap-2.5 border border-purple-400/30 animate-soft-float">
                <div className="w-7 h-7 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-500 text-xs">
                  <Code2 size={15} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-mono text-purple-600 dark:text-purple-400 leading-none">Skillset</div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Problem Solver</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
