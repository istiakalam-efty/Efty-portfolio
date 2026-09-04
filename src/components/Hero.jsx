import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ ready }) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const creativeRef = useRef(null);
  const developerRef = useRef(null);
  const creativeWrapperRef = useRef(null);
  const developerWrapperRef = useRef(null);
  const metaLeftRef = useRef(null);
  const metaRightRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const decorBadgeRef = useRef(null);
  const crosshairRef = useRef(null);
  const lineRef = useRef(null);
  const nextSectionPreviewRef = useRef(null);
  const nextSectionWordRef = useRef(null);
  const nextSectionTagRef = useRef(null);

  // 1. Entrance animation triggered after loader completes
  useEffect(() => {
    if (!ready) return;

    const ctx = gsap.context(() => {
      const enterTl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Initial state
      gsap.set([creativeRef.current, developerRef.current], {
        yPercent: 120,
        opacity: 0
      });
      gsap.set([metaLeftRef.current, metaRightRef.current, scrollIndicatorRef.current, decorBadgeRef.current, crosshairRef.current], {
        opacity: 0,
        y: 30
      });

      // Staggered reveal sequence
      enterTl
        .to(creativeRef.current, {
          yPercent: 0,
          opacity: 1,
          duration: 1.3,
          ease: "expo.out"
        })
        .to(
          developerRef.current,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.3,
            ease: "expo.out"
          },
          "-=0.9"
        )
        .to(
          [metaLeftRef.current, metaRightRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.15,
            ease: "power3.out"
          },
          "-=0.8"
        )
        .to(
          [decorBadgeRef.current, crosshairRef.current, scrollIndicatorRef.current],
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.1,
            ease: "power2.out"
          },
          "-=0.7"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [ready]);

  // 2. Mouse parallax interaction across hero
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xNorm = (clientX / window.innerWidth - 0.5) * 2;
      const yNorm = (clientY / window.innerHeight - 0.5) * 2;

      // Subtle parallax without shaking
      gsap.to(creativeRef.current, {
        x: xNorm * 18,
        y: yNorm * 12,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(developerRef.current, {
        x: -xNorm * 14,
        y: -yNorm * 10,
        duration: 0.8,
        ease: "power2.out"
      });

      gsap.to(decorBadgeRef.current, {
        x: xNorm * 25,
        y: yNorm * 20,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.to(crosshairRef.current, {
        x: -xNorm * 30,
        y: -yNorm * 25,
        duration: 1.0,
        ease: "power3.out"
      });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  // 3. Scroll Scrub Animation: Transform Hero into About section (responsive pinning)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Full pinned transformation
      mm.add("(min-width: 1024px)", () => {
        const pinTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=170%",
            pin: true,
            scrub: 1.2,
            anticipatePin: 1
          }
        });

        pinTimeline
          .to(
            stageRef.current,
            { backgroundColor: "#0a0a0a", duration: 1, ease: "none" },
            0
          )
          .to(
            creativeRef.current,
            { yPercent: -130, color: "#f5f0e8", letterSpacing: "0.08em", duration: 0.8, ease: "power2.inOut" },
            0
          )
          .to(
            developerRef.current,
            { yPercent: 120, xPercent: 35, color: "#f5f0e8", duration: 0.8, ease: "power2.inOut" },
            0
          )
          .to(
            [metaLeftRef.current, metaRightRef.current, scrollIndicatorRef.current],
            { y: -80, opacity: 0, duration: 0.5, stagger: 0.08, ease: "power2.in" },
            0
          )
          .to(
            decorBadgeRef.current,
            { scale: 0.4, opacity: 0, duration: 0.4, ease: "power2.in" },
            0
          )
          .fromTo(
            lineRef.current,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 0.6, duration: 0.6, ease: "power2.out" },
            0.3
          )
          .fromTo(
            nextSectionTagRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            0.5
          )
          .fromTo(
            nextSectionWordRef.current,
            { yPercent: 120, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
            0.4
          );
      });

      // Mobile / Tablet: Fluid scroll transformation without locking scroll
      mm.add("(max-width: 1023px)", () => {
        const mobileTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8
          }
        });

        mobileTimeline
          .to(
            stageRef.current,
            { backgroundColor: "#0a0a0a", duration: 1 },
            0
          )
          .to(
            creativeRef.current,
            { yPercent: -80, opacity: 0.2, duration: 0.8 },
            0
          )
          .to(
            developerRef.current,
            { yPercent: 60, opacity: 0.2, duration: 0.8 },
            0
          )
          .fromTo(
            lineRef.current,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 0.6, duration: 0.6 },
            0.3
          )
          .fromTo(
            nextSectionWordRef.current,
            { yPercent: 60, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.7 },
            0.4
          );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden select-none"
    >
      {/* Pinned Stage that transitions color */}
      <div
        ref={stageRef}
        className="relative w-full h-full bg-[#f5f0e8] text-[#0f0f0f] flex flex-col justify-between p-4 sm:p-10 lg:p-14 transition-colors will-change-transform"
      >
        {/* Decorative Floating Crosshair */}
        <div
          ref={crosshairRef}
          className="absolute top-28 right-12 sm:right-24 pointer-events-none hidden md:flex items-center gap-2 font-mono text-[10px] text-[#8e8a82] tracking-widest"
        >
          <span>[+] 23.8103° N</span>
          <span className="w-8 h-[1px] bg-[rgba(0,0,0,0.15)] dark:bg-[rgba(255,255,255,0.15)]" />
        </div>

        {/* Top Spacer for Navbar */}
        <div className="w-full pt-16 sm:pt-20 flex justify-between items-start">
          {/* Top Left Metadata */}
          <div
            ref={metaLeftRef}
            className="flex flex-col gap-1 max-w-sm font-mono text-xs tracking-wider text-[#4a4742]"
          >
            <span className="font-bold text-[#111] uppercase tracking-[0.2em]">
              AHAMMED ISTIAK ALAM EFTY
            </span>
            <span className="text-[11px] text-[#78746c]">
              B.Sc. Computer Science &amp; Engineering
            </span>
          </div>

          {/* Top Right Floating Badge */}
          <div
            ref={decorBadgeRef}
            className="hidden sm:flex flex-col items-end gap-1 font-mono text-[11px] text-[#4a4742] tracking-widest text-right"
          >
            <span className="px-3 py-1 border border-black/10 rounded-full bg-black/5 font-semibold">
              SCROLL DRIVEN • GSAP 2026
            </span>
            <span className="text-[10px] text-[#8e8a82]">PORTFOLIO EDITION 01</span>
          </div>
        </div>

        {/* Center: Tight Bold Condensed Editorial Lockup (Brought Close Together) */}
        <div className="relative my-auto flex flex-col items-center justify-center w-full overflow-hidden py-1 sm:py-2">
          {/* Mask 1: CREATIVE */}
          <div
            ref={creativeWrapperRef}
            className="overflow-hidden flex items-center justify-center -translate-x-3 sm:-translate-x-8 lg:-translate-x-14"
          >
            <h1
              ref={creativeRef}
              className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[0.82] tracking-[-0.01em] text-[15vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[10vw] xl:text-[9.5vw] text-[#0d0d0d] [text-shadow:0_12px_32px_rgba(0,0,0,0.14),0_2px_4px_rgba(0,0,0,0.1)] will-change-transform select-none"
              style={{ display: "inline-block" }}
            >
              CREATIVE
            </h1>
          </div>

          {/* Mask 2: DEVELOPER */}
          <div
            ref={developerWrapperRef}
            className="overflow-hidden flex items-center justify-center translate-x-3 sm:translate-x-8 lg:translate-x-14 -mt-2 sm:-mt-4 lg:-mt-6"
          >
            <h1
              ref={developerRef}
              className="font-['Barlow_Condensed',sans-serif] font-black uppercase leading-[0.82] tracking-[-0.01em] text-[15vw] sm:text-[13vw] md:text-[11.5vw] lg:text-[10vw] xl:text-[9.5vw] text-[#0d0d0d] [text-shadow:0_12px_32px_rgba(0,0,0,0.14),0_2px_4px_rgba(0,0,0,0.1)] will-change-transform select-none"
              style={{ display: "inline-block" }}
            >
              DEVELOPER
            </h1>
          </div>
        </div>

        {/* Bottom Hero Metadata & Scroll Indicator */}
        <div className="w-full flex items-end justify-between pb-4 sm:pb-8">
          {/* Statement Left */}
          <div
            ref={metaRightRef}
            className="max-w-xs sm:max-w-md font-mono text-xs sm:text-sm text-[#4a4742] leading-relaxed"
          >
            <p className="border-l-2 border-[#c5a880] pl-3">
              Transforming software architecture into continuous, immersive, and
              editorial digital narratives.
            </p>
          </div>

          {/* Scroll Down Hint */}
          <div
            ref={scrollIndicatorRef}
            className="flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[#78746c] uppercase"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-[#111] to-transparent animate-bounce" />
          </div>
        </div>

        {/* TRANSITION OVERLAY INTO ABOUT: Line + 02 — ABOUT + Giant ABOUT */}
        <div
          ref={nextSectionPreviewRef}
          className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center px-6 sm:px-12 z-30"
        >
          {/* Horizontal Growing Line */}
          <div
            ref={lineRef}
            className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a880] to-transparent mb-6 origin-center opacity-0"
          />

          {/* Small Section Number: 02 — ABOUT */}
          <div
            ref={nextSectionTagRef}
            className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#c5a880] uppercase mb-2 opacity-0"
          >
            02 — ABOUT
          </div>

          {/* Giant Masked Word: ABOUT */}
          <div className="overflow-hidden flex items-center justify-center">
            <span
              ref={nextSectionWordRef}
              className="font-['Syne',sans-serif] font-extrabold uppercase text-[12vw] sm:text-[10vw] lg:text-[8.5vw] leading-none tracking-tight text-[#f5f0e8] opacity-0 will-change-transform"
            >
              ABOUT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
