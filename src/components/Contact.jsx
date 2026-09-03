import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo } from "../data/projects";
import { getLenis } from "../animations/useLenis";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const magneticButtonRef = useRef(null);
  const magneticWrapperRef = useRef(null);
  const footerWordmarkRef = useRef(null);
  const [copied, setCopied] = useState(false);

  // 1. Scroll-driven typography choreographies
  // LET'S moves upward
  // CREATE moves slightly sideways
  // SOMETHING scales into position
  // MEANINGFUL reveals from behind a mask
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "top 20%",
          scrub: 1.2
        }
      });

      // Initial states
      gsap.set(line1Ref.current, { yPercent: 40, opacity: 0.2 });
      gsap.set(line2Ref.current, { xPercent: -35, opacity: 0.2 });
      gsap.set(line3Ref.current, { scale: 0.75, opacity: 0.2 });
      gsap.set(line4Ref.current, { yPercent: 120, opacity: 0 });

      // Animations as user scrolls
      tl.to(
        line1Ref.current,
        {
          yPercent: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1
        },
        0
      )
        .to(
          line2Ref.current,
          {
            xPercent: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1
          },
          0.1
        )
        .to(
          line3Ref.current,
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 1
          },
          0.2
        )
        .to(
          line4Ref.current,
          {
            yPercent: 0,
            opacity: 1,
            ease: "power3.out",
            duration: 1
          },
          0.3
        );

      // Giant footer wordmark subtle parallax
      gsap.fromTo(
        footerWordmarkRef.current,
        { yPercent: 20, opacity: 0.4 },
        {
          yPercent: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: footerWordmarkRef.current,
            start: "top 95%",
            scrub: 1
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 2. Magnetic Mouse Interaction for Circular Button
  useEffect(() => {
    const btn = magneticButtonRef.current;
    const wrapper = magneticWrapperRef.current;
    if (!btn || !wrapper) return;

    const onMouseMove = (e) => {
      const rect = wrapper.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      // Magnetic pull radius 180px
      if (distance < 180) {
        gsap.to(btn, {
          x: deltaX * 0.45,
          y: deltaY * 0.45,
          scale: 1.06,
          duration: 0.4,
          ease: "power2.out"
        });
      } else {
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)"
        });
      }
    };

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)"
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    wrapper.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      wrapper.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.8 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#040404] text-[#f5f0e8] px-6 sm:px-12 lg:px-20 pt-28 sm:pt-40 pb-12 overflow-hidden border-t border-white/10 select-none flex flex-col justify-between"
    >
      {/* Background technical grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #c5a880 1px, transparent 1px), linear-gradient(to bottom, #c5a880 1px, transparent 1px)",
          backgroundSize: "90px 90px"
        }}
      />

      <div className="max-w-[1700px] mx-auto w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-16 sm:mb-24">
          <span className="font-mono text-xs sm:text-sm tracking-[0.3em] text-[#c5a880] uppercase">
            05 — CONTACT &amp; COLLABORATION
          </span>
          <span className="font-mono text-xs tracking-widest text-[#8e8a82] uppercase hidden sm:block">
            DIRECT TRANSMISSION
          </span>
        </div>

        {/* Main Content: Large Kinetic Typographic Lines & Magnetic Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
          {/* Typographic Statement (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Line 1: LET'S */}
            <div className="overflow-hidden">
              <h2
                ref={line1Ref}
                className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.84] tracking-[-0.01em] text-[#f5f0e8] will-change-transform"
              >
                LET&apos;S
              </h2>
            </div>

            {/* Line 2: CREATE */}
            <div className="overflow-hidden">
              <h2
                ref={line2Ref}
                className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.84] tracking-[-0.01em] text-[#c5a880] will-change-transform"
              >
                CREATE
              </h2>
            </div>

            {/* Line 3: SOMETHING */}
            <div className="overflow-hidden">
              <h2
                ref={line3Ref}
                className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.84] tracking-[-0.01em] text-[#f5f0e8] will-change-transform"
              >
                SOMETHING
              </h2>
            </div>

            {/* Line 4: MEANINGFUL. (Masked Reveal) */}
            <div className="overflow-hidden">
              <h2
                ref={line4Ref}
                className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.84] tracking-[-0.01em] text-white/90 will-change-transform"
              >
                MEANINGFUL.
              </h2>
            </div>

            {/* Direct Email copy and details */}
            <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-6 font-mono text-xs sm:text-sm text-[#a39e93]">
              <div className="flex items-center gap-3">
                <span className="text-[#c5a880]">[+]</span>
                <span>INQUIRIES:</span>
                <button
                  onClick={handleCopyEmail}
                  data-cursor="cta"
                  data-cursor-text={copied ? "COPIED" : "COPY"}
                  className="text-[#f5f0e8] underline underline-offset-4 hover:text-[#c5a880] transition-colors cursor-pointer"
                >
                  {personalInfo.email}
                </button>
              </div>

              {copied && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#c5a880]/20 text-[#c5a880] text-[10px] font-mono tracking-wider animate-in fade-in">
                  ✓ COPIED TO CLIPBOARD
                </span>
              )}
            </div>
          </div>

          {/* Magnetic CTA Column (4 Cols) */}
          <div
            ref={magneticWrapperRef}
            className="lg:col-span-4 flex items-center justify-center lg:justify-end py-8"
          >
            <a
              ref={magneticButtonRef}
              href={`mailto:${personalInfo.email}`}
              data-cursor="cta"
              data-cursor-text="TALK"
              className="group relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[rgba(245,240,232,0.25)] bg-[#0d0d0d] flex flex-col items-center justify-center text-center p-6 transition-colors duration-500 hover:border-[#c5a880] hover:bg-[#c5a880] shadow-2xl cursor-pointer will-change-transform"
            >
              <div className="flex flex-col items-center gap-2 group-hover:scale-105 transition-transform duration-300">
                <span className="font-['Syne',sans-serif] text-base sm:text-lg font-extrabold uppercase tracking-wider text-[#f5f0e8] group-hover:text-[#0a0a0a] transition-colors">
                  LET&apos;S TALK
                </span>
                <span className="font-mono text-2xl group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#0a0a0a] text-[#c5a880] transition-all duration-300">
                  ↗
                </span>
                <span className="font-mono text-[9px] tracking-widest text-[#8e8a82] group-hover:text-[#0a0a0a]/70 uppercase transition-colors">
                  START PROJECT
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="pt-16 sm:pt-24 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-8 font-mono text-xs sm:text-sm tracking-widest">
            <span className="text-[#78746c]">DISCOVER:</span>
            {[
              { name: "GITHUB", url: personalInfo.socials.github },
              { name: "LINKEDIN", url: personalInfo.socials.linkedin },
              { name: "X (TWITTER)", url: personalInfo.socials.x }
            ].map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="cta"
                data-cursor-text={soc.name}
                className="text-[#f5f0e8] hover:text-[#c5a880] transition-colors relative group py-1"
              >
                <span>{soc.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a880] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="font-mono text-xs text-[#8e8a82] tracking-wider">
            DHAKA, BD // LOCAL TIME UTC+6
          </div>
        </div>

        {/* Huge Editorial Wordmark Footer - Full Display */}
        <div className="mt-16 sm:mt-24 pt-8 sm:pt-12 border-t border-white/10 flex flex-col items-center justify-center text-center w-full">
          {/* Giant Wordmark in Full Display */}
          <div className="w-full overflow-hidden select-none flex justify-center items-center py-4 sm:py-6">
            <h1
              ref={footerWordmarkRef}
              className="font-['Barlow_Condensed',sans-serif] font-black uppercase text-[24vw] sm:text-[22vw] lg:text-[21vw] xl:text-[20vw] leading-[0.8] tracking-[0.02em] text-[#f5f0e8] [text-shadow:0_10px_40px_rgba(0,0,0,0.8),0_2px_6px_rgba(197,168,128,0.25)] will-change-transform text-center hover:text-[#c5a880] transition-colors duration-500 cursor-default select-none"
            >
              EFTY
            </h1>
          </div>

          {/* Subtitle & Legal */}
          <div className="w-full mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#78746c] tracking-widest">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="text-[#f5f0e8] font-bold">
                AHAMMED ISTIAK ALAM EFTY
              </span>
              <span className="hidden sm:inline">•</span>
              <span>CREATIVE DEVELOPER // B.SC. CSE</span>
            </div>

            <div>© 2026 EFTY. ALL RIGHTS RESERVED.</div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              data-cursor="cta"
              data-cursor-text="TOP"
              className="group flex items-center gap-2 text-[#f5f0e8] hover:text-[#c5a880] transition-colors cursor-pointer py-1"
            >
              <span>BACK TO TOP</span>
              <span className="group-hover:-translate-y-1 transition-transform">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
