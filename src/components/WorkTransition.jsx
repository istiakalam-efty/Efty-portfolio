import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkTransition() {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const giantWorkRef = useRef(null);
  const leftLabelRef = useRef(null);
  const rightLabelRef = useRef(null);
  const topTagRef = useRef(null);
  const bottomTagRef = useRef(null);
  const gridOverlayRef = useRef(null);
  const marqueeContainerRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Full pinned dramatic scale-down
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=170%",
            pin: true,
            scrub: 1.2,
            anticipatePin: 1
          }
        });

        gsap.set(giantWorkRef.current, {
          scale: 2.8,
          opacity: 0.35,
          letterSpacing: "0.15em",
          transformOrigin: "center center"
        });

        tl.to(
          giantWorkRef.current,
          {
            scale: 1,
            opacity: 1,
            letterSpacing: "-0.04em",
            ease: "power2.out",
            duration: 1
          },
          0
        )
          .to(
            leftLabelRef.current,
            { x: -120, opacity: 0.2, duration: 0.8, ease: "power2.inOut" },
            0
          )
          .to(
            rightLabelRef.current,
            { x: 120, opacity: 0.2, duration: 0.8, ease: "power2.inOut" },
            0
          )
          .fromTo(
            topTagRef.current,
            { y: -30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            0.5
          )
          .fromTo(
            bottomTagRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            0.6
          );
      });

      // Mobile / Tablet: Fluid scale down without excessive pinning
      mm.add("(max-width: 1023px)", () => {
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom center",
            scrub: 0.8
          }
        });

        gsap.set(giantWorkRef.current, {
          scale: 1.5,
          opacity: 0.4,
          transformOrigin: "center center"
        });

        mobileTl.to(giantWorkRef.current, {
          scale: 1,
          opacity: 1,
          letterSpacing: "-0.04em",
          duration: 1
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 2. Velocity-responsive Marquee ticker (slow, calm, editorial pace)
  useEffect(() => {
    const marquee = marqueeInnerRef.current;
    if (!marquee) return;

    let baseSpeed = 0.05; // calm, luxury drift pace
    let currentX = 0;
    let velocity = 0;

    // ScrollTrigger velocity listener
    ScrollTrigger.create({
      onUpdate: (self) => {
        const scrollVel = Math.abs(self.getVelocity() / 1800);
        velocity = Math.min(scrollVel, 0.35);
      }
    });

    // Continuous ticker loop
    const ticker = gsap.ticker.add(() => {
      // Smoothly decay velocity back to 0
      velocity *= 0.94;
      const speed = baseSpeed + velocity;
      currentX -= speed;

      // Wrap around seamlessly
      if (currentX <= -50) {
        currentX = 0;
      }

      gsap.set(marquee, {
        xPercent: currentX,
        skewX: -velocity * 3
      });
    });

    return () => {
      gsap.ticker.remove(ticker);
    };
  }, []);

  const marqueeItems = [
    "CREATIVE DEVELOPMENT",
    "INTERACTIVE WEB",
    "SOFTWARE ARCHITECTURE",
    "MOTION DESIGN",
    "COMPILER ENGINEERING",
    "DATABASE SYSTEMS"
  ];

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full h-screen bg-[#050505] text-[#f5f0e8] overflow-hidden select-none border-t border-white/5"
    >
      <div
        ref={stageRef}
        className="relative w-full h-full flex flex-col justify-between p-6 sm:p-12 lg:p-16 items-center"
      >
        {/* Top Header Tag: 04 — SELECTED WORK */}
        <div
          ref={topTagRef}
          className="w-full flex items-center justify-between border-b border-white/10 pb-4 z-20"
        >
          <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#c5a880] uppercase">
            04 — SELECTED WORK
          </span>
          <span className="font-mono text-xs tracking-widest text-[#8e8a82] uppercase hidden sm:block">
            FEATURED ENGINEERING ARCHIVE
          </span>
        </div>

        {/* Center: Scaled "WORK" Typography (Tuned for laptop and mobile) */}
        <div className="relative my-auto flex items-center justify-center w-full z-10 overflow-hidden">
          {/* Left Decorative Label that slides away */}
          <div
            ref={leftLabelRef}
            className="absolute left-0 hidden xl:flex flex-col gap-1 font-mono text-xs text-[#8e8a82] tracking-widest pointer-events-none"
          >
            <span>[+] 03 PRODUCTION PROJECTS</span>
            <span className="text-[10px] text-[#555]">SCROLL TO REVEAL</span>
          </div>

          <h1
            ref={giantWorkRef}
            className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-[20vw] sm:text-[18vw] lg:text-[16vw] xl:text-[14vw] leading-none tracking-tight text-[#f5f0e8] will-change-transform text-center pointer-events-none"
          >
            WORK
          </h1>

          {/* Right Decorative Label that slides away */}
          <div
            ref={rightLabelRef}
            className="absolute right-0 hidden xl:flex flex-col items-end gap-1 font-mono text-xs text-[#8e8a82] tracking-widest pointer-events-none text-right"
          >
            <span>INTERACTIVE CASE STUDIES</span>
            <span className="text-[10px] text-[#555]">PINNED STAGES</span>
          </div>
        </div>

        {/* Bottom Infinite Velocity-Reactive Marquee */}
        <div
          ref={bottomTagRef}
          className="w-full z-20 overflow-hidden py-4 border-t border-b border-white/10 bg-[#070707]/90 backdrop-blur-md"
        >
          <div
            ref={marqueeInnerRef}
            className="flex items-center gap-8 whitespace-nowrap will-change-transform"
          >
            {/* Duplicated list for infinite seamless loop */}
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              (item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-8 font-mono text-xs sm:text-sm tracking-[0.25em] text-[#a39e93] uppercase font-semibold"
                >
                  <span className="hover:text-[#f5f0e8] transition-colors">
                    {item}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
