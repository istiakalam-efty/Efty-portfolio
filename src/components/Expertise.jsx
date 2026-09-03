import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Expertise() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const tagRef = useRef(null);
  const listRef = useRef(null);
  const floatingTagsRef = useRef([]);
  const [activeItem, setActiveItem] = useState(null);

  // Floating tags definition
  const floatingTech = [
    { label: "HTML", speed: 0.8, x: "8%", y: "15%", rot: -6 },
    { label: "CSS", speed: 1.1, x: "82%", y: "12%", rot: 8 },
    { label: "JS", speed: 0.9, x: "12%", y: "72%", rot: 5 },
    { label: "REACT", speed: 1.3, x: "86%", y: "48%", rot: -10 },
    { label: "NODE", speed: 0.8, x: "6%", y: "42%", rot: 4 },
    { label: "C++", speed: 1.2, x: "74%", y: "82%", rot: -7 },
    { label: "PYTHON", speed: 1.0, x: "42%", y: "10%", rot: 6 },
    { label: "MONGODB", speed: 1.4, x: "88%", y: "88%", rot: 12 }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading and tag entrance
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
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 2. List rows staggered entry
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // 3. Ambient slow floating animation for tech tags
      floatingTagsRef.current.forEach((el, idx) => {
        if (!el) return;
        const config = floatingTech[idx];
        gsap.to(el, {
          y: "+=20",
          x: "+=12",
          rotation: `+=${config.rot * 1.5}`,
          duration: 3 + idx * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 4. Subtle mouse parallax on floating tags
  useEffect(() => {
    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xNorm = (clientX / window.innerWidth - 0.5) * 2;
      const yNorm = (clientY / window.innerHeight - 0.5) * 2;

      floatingTagsRef.current.forEach((el, idx) => {
        if (!el) return;
        const speed = floatingTech[idx].speed;
        gsap.to(el, {
          x: xNorm * 35 * speed,
          y: yNorm * 30 * speed,
          duration: 1.2,
          ease: "power2.out"
        });
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#070707] text-[#f5f0e8] px-6 sm:px-12 lg:px-20 py-28 sm:py-36 overflow-hidden border-t border-white/5"
    >
      {/* Subtle Technical Blueprint Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #c5a880 1px, transparent 1px), linear-gradient(to bottom, #c5a880 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}
      />

      {/* Floating Technology Badges */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingTech.map((tech, idx) => (
          <div
            key={tech.label}
            ref={(el) => (floatingTagsRef.current[idx] = el)}
            className="absolute hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#121212]/80 backdrop-blur-md font-mono text-[11px] tracking-wider text-[#a39e93] shadow-xl will-change-transform"
            style={{
              left: tech.x,
              top: tech.y,
              transform: `rotate(${tech.rot}deg)`
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]/70" />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16 sm:mb-20">
          <span
            ref={tagRef}
            className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#c5a880] uppercase"
          >
            03 — EXPERTISE
          </span>
          <span className="font-mono text-xs tracking-widest text-[#8e8a82] uppercase hidden sm:block">
            CAPABILITIES &amp; ARCHITECTURAL STACK
          </span>
        </div>

        {/* Large Entering Heading */}
        <div className="overflow-hidden mb-16 sm:mb-24">
          <h2
            ref={headingRef}
            className="font-['Barlow_Condensed',sans-serif] text-6xl sm:text-7xl lg:text-9xl font-black uppercase tracking-[-0.01em] text-[#f5f0e8]"
          >
            EXPERTISE
          </h2>
        </div>

        {/* Interactive Blueprint List */}
        <div ref={listRef} className="flex flex-col w-full">
          {personalInfo.expertiseList.map((item, idx) => {
            const isHovered = activeItem === idx;
            return (
              <div
                key={item.num}
                onMouseEnter={() => setActiveItem(idx)}
                onMouseLeave={() => setActiveItem(null)}
                data-cursor="explore"
                data-cursor-text={item.title}
                className="group relative border-t border-white/10 py-8 sm:py-12 transition-all duration-300 cursor-pointer select-none"
              >
                {/* Expanding Golden Hairline on Hover */}
                <div
                  className={`absolute top-0 left-0 h-[1px] bg-gradient-to-r from-[#c5a880] via-[#f5f0e8] to-transparent transition-all duration-500 ${
                    isHovered ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-center">
                  {/* Category Number */}
                  <div className="md:col-span-1 font-mono text-sm sm:text-lg font-medium tracking-widest text-[#8e8a82] group-hover:text-[#c5a880] group-hover:translate-x-2 transition-all duration-300">
                    {item.num}
                  </div>

                  {/* Category Title */}
                  <div className="md:col-span-4 font-['Barlow_Condensed',sans-serif] text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[-0.01em] text-[#f5f0e8] group-hover:translate-x-3 transition-transform duration-300">
                    {item.title}
                  </div>

                  {/* Skills Pills */}
                  <div className="md:col-span-6 md:pl-6 lg:pl-10 font-mono text-xs sm:text-sm text-[#a39e93] leading-relaxed group-hover:text-[#f5f0e8] transition-colors duration-300">
                    <p className="tracking-wider">
                      {item.skills.join(" / ")}
                    </p>

                    {/* Additional Information revealing on hover */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isHovered
                          ? "max-h-32 opacity-100 mt-4 pt-3 border-t border-white/10"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs text-[#c5a880]/90 font-mono leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="md:col-span-1 hidden md:flex justify-end">
                    <span
                      className={`font-mono text-lg transition-all duration-300 ${
                        isHovered
                          ? "text-[#c5a880] translate-x-1 -translate-y-1 rotate-45"
                          : "text-[#8e8a82] rotate-0"
                      }`}
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
