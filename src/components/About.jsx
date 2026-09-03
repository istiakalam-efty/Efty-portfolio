import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const tagRef = useRef(null);
  const headingRef = useRef(null);
  const statementLinesRef = useRef([]);
  const bioRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading and tag reveal
      gsap.fromTo(
        tagRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: tagRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(
        headingRef.current,
        { yPercent: 120, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 2. Large statement line-by-line masked reveal
      statementLinesRef.current.forEach((line) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: line,
              start: "top 88%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // 3. Paragraph text reveal
      if (bioRef.current) {
        gsap.fromTo(
          bioRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bioRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // 4. Image mask reveal & scroll parallax
      if (imageWrapperRef.current && imageRef.current) {
        // Mask opening
        gsap.fromTo(
          imageWrapperRef.current,
          { clipPath: "inset(100% 0% 0% 0%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.3,
            ease: "expo.out",
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Image parallax & subtle scale
        gsap.fromTo(
          imageRef.current,
          { scale: 1.25, yPercent: 15 },
          {
            scale: 1.02,
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2
            }
          }
        );
      }

      // 5. Highlights stats reveal
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const statementLines = [
    "I BUILD DIGITAL EXPERIENCES",
    "WHERE CODE MEETS CREATIVITY."
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#0a0a0a] text-[#f5f0e8] px-6 sm:px-12 lg:px-20 py-28 sm:py-36 overflow-hidden border-t border-white/5"
    >
      {/* Background fine grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16 sm:mb-20">
          <span
            ref={tagRef}
            className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#c5a880] uppercase"
          >
            02 — ABOUT
          </span>
          <span className="font-mono text-xs tracking-widest text-[#8e8a82] uppercase hidden sm:block">
            PHILOSOPHY &amp; DISCIPLINES
          </span>
        </div>

        {/* Large Statement - Split into masked lines */}
        <div className="mb-20 sm:mb-28">
          <div className="overflow-hidden mb-3">
            <span
              ref={headingRef}
              className="inline-block font-mono text-xs tracking-[0.25em] text-[#8e8a82] uppercase"
            >
              ABOUT ME
            </span>
          </div>

          <div className="space-y-1 sm:space-y-2">
            {statementLines.map((line, idx) => (
              <div key={idx} className="overflow-hidden">
                <h2
                  ref={(el) => (statementLinesRef.current[idx] = el)}
                  className="font-['Syne',sans-serif] text-3xl sm:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[1.05] text-[#f5f0e8]"
                >
                  {line}
                </h2>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Editorial Layout: Text Narrative & Profile Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div ref={bioRef} className="space-y-6 sm:space-y-8 font-mono text-sm sm:text-base text-[#a39e93] leading-relaxed">
              <p className="text-[#f5f0e8] text-base sm:text-lg font-normal leading-relaxed">
                I am a Computer Science &amp; Engineering student who treats software engineering not merely as logic and syntax, but as an interactive visual art form.
              </p>

              <p>
                My background encompasses rigorous computer science fundamentals—from compiler pipelines, memory organization, and algorithm optimization to full-stack systems with Node.js and MongoDB.
              </p>

              <p>
                Simultaneously, I obsess over the kinetic layer: scroll ergonomics, high-framerate GSAP choreographies, custom shader interactions, and editorial typographic rhythm that make digital products feel physical, deliberate, and expensive.
              </p>

              {/* Architectural Discipline Tags */}
              <div className="pt-4 flex flex-wrap gap-2">
                {[
                  "COMPUTATIONAL RIGOR",
                  "MOTION DESIGN",
                  "FULL-STACK SYSTEMS",
                  "ALGORITHMIC ARCHITECTURE",
                  "EDITORIAL TYPOGRAPHY"
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-[10px] tracking-wider text-[#c5a880]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div
              ref={statsRef}
              className="mt-16 sm:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8"
            >
              <div>
                <span className="block font-['Syne',sans-serif] text-3xl sm:text-4xl font-extrabold text-[#f5f0e8]">
                  03+
                </span>
                <span className="font-mono text-xs text-[#8e8a82] tracking-wider uppercase">
                  Flagship Systems
                </span>
              </div>
              <div>
                <span className="block font-['Syne',sans-serif] text-3xl sm:text-4xl font-extrabold text-[#f5f0e8]">
                  15+
                </span>
                <span className="font-mono text-xs text-[#8e8a82] tracking-wider uppercase">
                  Technologies
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-['Syne',sans-serif] text-3xl sm:text-4xl font-extrabold text-[#c5a880]">
                  2026
                </span>
                <span className="font-mono text-xs text-[#8e8a82] tracking-wider uppercase">
                  Active B.Sc. CSE
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Portrait Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              ref={imageWrapperRef}
              data-cursor="explore"
              data-cursor-text="EFTY"
              className="relative w-full max-w-md aspect-[4/5] overflow-hidden rounded-sm border border-white/10 group cursor-pointer bg-[#141414]"
              style={{ clipPath: "inset(0% 0% 0% 0%)" }}
            >
              {/* Technical Framing Crosshairs */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-[#c5a880] tracking-widest pointer-events-none">
                [+] ARCHIVE // PORTRAIT
              </div>
              <div className="absolute bottom-4 right-4 z-20 font-mono text-[9px] text-[#8e8a82] tracking-widest pointer-events-none">
                EFTY.ASIA
              </div>

              {/* Portrait Image */}
              <img
                ref={imageRef}
                src="/images/profile.jpg"
                alt="Ahammed Istiak Alam Efty"
                className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 will-change-transform"
              />

              {/* Subtle tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Image Sub-caption */}
            <div className="mt-4 w-full max-w-md flex justify-between items-center font-mono text-[10px] text-[#8e8a82] tracking-widest uppercase">
              <span>AHAMMED ISTIAK ALAM EFTY</span>
              <span>DEV / DESIGNER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
