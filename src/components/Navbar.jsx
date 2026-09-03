import React, { useState, useEffect } from "react";
import { getLenis } from "../animations/useLenis";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const lenis = getLenis();
    const target = document.querySelector(id);
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: 0, duration: 1.4 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[500] px-4 sm:px-8 py-4 pointer-events-none transition-all duration-300">
      <div className="max-w-[1700px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Brand Monogram & Coordinates */}
        <div
          onClick={() => scrollToSection("#hero")}
          className="cursor-pointer group flex items-center gap-3 select-none"
          data-cursor="explore"
          data-cursor-text="HOME"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-[rgba(255,255,255,0.25)] flex items-center justify-center font-['Syne',sans-serif] font-bold text-xs tracking-wider text-[#f5f0e8] bg-[#0d0d0d]/60 backdrop-blur-md group-hover:border-[#c5a880] transition-colors">
            E
          </div>
          <div className="flex flex-col">
            <span className="font-['Syne',sans-serif] font-bold text-sm tracking-widest text-[#f5f0e8] group-hover:text-[#c5a880] transition-colors leading-tight">
              EFTY
            </span>
            <span className="font-mono text-[9px] text-[#8e8a82] tracking-wider hidden sm:block leading-tight">
              23.8103° N // 90.4125° E
            </span>
          </div>
        </div>

        {/* Center: Minimal Section Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0d0d0d]/70 backdrop-blur-lg px-4 py-2 rounded-full border border-[rgba(255,255,255,0.1)] shadow-2xl">
          {[
            { label: "ABOUT", href: "#about" },
            { label: "EXPERTISE", href: "#expertise" },
            { label: "WORK", href: "#work" },
            { label: "CONTACT", href: "#contact" }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              data-cursor-text={item.label}
              className="px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-[#a39e93] hover:text-[#f5f0e8] transition-colors rounded-full hover:bg-white/5 relative group cursor-pointer"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#c5a880] group-hover:w-1/2 transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* Right: Availability badge & CTA */}
        <div className="flex items-center gap-3 select-none">
          {/* Status badge */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0d0d]/60 backdrop-blur-md border border-[rgba(255,255,255,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#a39e93] uppercase">
              AVAILABLE FOR WORK
            </span>
          </div>

          {/* Quick Talk Button */}
          <button
            onClick={() => scrollToSection("#contact")}
            data-cursor="cta"
            data-cursor-text="TALK"
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#f5f0e8] text-[#0a0a0a] font-['Syne',sans-serif] font-bold text-xs tracking-wider uppercase hover:bg-[#c5a880] hover:text-[#0a0a0a] transition-all duration-300 shadow-lg cursor-pointer transform hover:scale-105 active:scale-95"
          >
            LET&apos;S TALK
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden w-9 h-9 rounded-full bg-[#0d0d0d]/80 border border-[rgba(255,255,255,0.2)] flex flex-col items-center justify-center gap-1 text-[#f5f0e8] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`w-4 h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto mt-3 bg-[#0d0d0d]/95 backdrop-blur-xl border border-[rgba(255,255,255,0.12)] rounded-2xl p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3 font-mono text-sm tracking-widest">
            {[
              { label: "01 — ABOUT", href: "#about" },
              { label: "02 — EXPERTISE", href: "#expertise" },
              { label: "03 — WORK", href: "#work" },
              { label: "04 — CONTACT", href: "#contact" }
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-2 text-[#a39e93] hover:text-[#f5f0e8] border-b border-white/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#8e8a82]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              AVAILABLE 2026
            </span>
            <span>DHAKA // BD</span>
          </div>
        </div>
      )}
    </header>
  );
}
