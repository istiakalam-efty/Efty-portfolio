import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectItem({ project, index, total }) {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const titleRef = useRef(null);
  const numberRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const imageInnerRef = useRef(null);
  const metaRef = useRef(null);
  const arrowRef = useRef(null);
  const techListRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop: Full pinned experience with horizontal movement & mask scrub
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=130%",
            pin: true,
            scrub: 1,
            anticipatePin: 1
          }
        });

        const initialX = project.direction === "left" ? -6 : 6;

        gsap.set(titleRef.current, {
          xPercent: initialX,
          opacity: 0.5
        });

        tl.to(
          titleRef.current,
          { xPercent: 0, opacity: 1, ease: "power2.out", duration: 0.5 },
          0
        );

        gsap.set(imageWrapperRef.current, {
          scale: 0.75,
          clipPath: "inset(12% 10% 12% 10%)"
        });

        tl.to(
          imageWrapperRef.current,
          { scale: 1, clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out", duration: 0.75 },
          0
        );

        tl.to(
          imageWrapperRef.current,
          { scale: 1.04, ease: "power1.in", duration: 0.4 },
          0.8
        );

        tl.fromTo(
          numberRef.current,
          { y: -60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          0.15
        );

        tl.fromTo(
          metaRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
          0.25
        );

        tl.fromTo(
          arrowRef.current,
          { rotation: -45, scale: 0.7 },
          { rotation: 0, scale: 1, duration: 0.6, ease: "power2.out" },
          0.2
        );
      });

      // Mobile / Tablet: Fluid scroll animation without locking scroll
      mm.add("(max-width: 1023px)", () => {
        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 80%",
            scrub: 0.8
          }
        });

        const initialX = project.direction === "left" ? -10 : 10;

        gsap.set(titleRef.current, { xPercent: initialX, opacity: 0.5 });
        mobileTl.to(titleRef.current, { xPercent: 0, opacity: 1, duration: 0.8 }, 0);

        gsap.set(imageWrapperRef.current, { scale: 0.85, clipPath: "inset(5% 5% 5% 5%)" });
        mobileTl.to(imageWrapperRef.current, { scale: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 0.8 }, 0);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [project.direction]);

  // Desktop Hover Interaction
  const handleMouseEnter = () => {
    gsap.to(imageInnerRef.current, {
      scale: 1.08,
      duration: 0.5,
      ease: "power2.out"
    });
    gsap.to(titleRef.current, {
      x: project.direction === "left" ? 12 : -12,
      duration: 0.4,
      ease: "power2.out"
    });
    gsap.to(arrowRef.current, {
      rotation: 45,
      scale: 1.15,
      color: "#c5a880",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageInnerRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    });
    gsap.to(titleRef.current, {
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    });
    gsap.to(arrowRef.current, {
      rotation: 0,
      scale: 1,
      color: "#f5f0e8",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section
      id={project.id}
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen bg-[#080808] text-[#f5f0e8] overflow-hidden flex flex-col justify-between p-6 sm:p-12 lg:p-16 border-t border-white/10 select-none"
    >
      {/* Top Bar: Project Index & Subtitle */}
      <div className="w-full flex items-center justify-between border-b border-white/10 pb-4 z-20">
        <div className="flex items-center gap-4">
          <span
            ref={numberRef}
            className="font-mono text-sm sm:text-base tracking-[0.25em] text-[#c5a880] font-bold"
          >
            PROJECT {project.number} / 0{total}
          </span>
          <span className="w-8 h-[1px] bg-white/20 hidden sm:block" />
          <span className="font-mono text-xs text-[#8e8a82] uppercase tracking-wider hidden sm:block">
            {project.subtitle}
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-[#8e8a82] tracking-widest">
          <span>{project.year}</span>
          <span className="text-[#c5a880]">•</span>
          <span>{project.role}</span>
        </div>
      </div>

      {/* Main Stage: Two Columns (Huge Title & Visual Presentation) */}
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor="view"
        data-cursor-text="VIEW"
        className="relative my-auto w-full max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 cursor-pointer"
      >
        {/* Left Column: Huge Title, Narrative, Features */}
        <div className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
          {/* Full Project Title - Responsive, zero clipping, fully visible */}
          <div className="mb-4 w-full">
            <h2
              ref={titleRef}
              className="font-['Barlow_Condensed',sans-serif] font-black text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase tracking-[-0.01em] leading-[0.92] text-[#f5f0e8] will-change-transform break-words"
            >
              {project.title}
            </h2>
          </div>

          {/* Tagline & Description */}
          <div ref={metaRef} className="space-y-4">
            <p className="font-mono text-xs sm:text-sm text-[#c5a880] tracking-wide font-medium">
              {project.tagline}
            </p>

            <p className="font-mono text-xs sm:text-sm text-[#a39e93] leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* Core Features */}
            <div className="pt-2">
              <span className="block font-mono text-[10px] text-[#78746c] tracking-[0.25em] uppercase mb-2">
                SYSTEM ARCHITECTURE HIGHLIGHTS
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.slice(0, 4).map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 font-mono text-[11px] text-[#f5f0e8]/80"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Pills */}
            <div ref={techListRef} className="pt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] font-mono text-[10px] tracking-wider text-[#d6d0c4]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* External Links & Arrow */}
            <div className="pt-4 flex items-center gap-6">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 font-['Syne',sans-serif] font-bold text-xs sm:text-sm tracking-wider uppercase text-[#f5f0e8] hover:text-[#c5a880] transition-colors group/link"
              >
                <span>INSPECT REPOSITORY</span>
                <span
                  ref={arrowRef}
                  className="inline-block transition-transform duration-300"
                >
                  ↗
                </span>
              </a>

              {/* Technical stat tags */}
              <div className="hidden sm:flex items-center gap-4 border-l border-white/10 pl-6 font-mono text-[11px] text-[#8e8a82]">
                {project.stats.map((stat, i) => (
                  <span key={i}>
                    <strong className="text-[#f5f0e8]">{stat.value}</strong>{" "}
                    {stat.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Immersive Visual with Mask Reveal & Scale */}
        <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
          <div
            ref={imageWrapperRef}
            className="relative w-full aspect-[16/10] max-w-xl rounded-lg overflow-hidden border border-white/15 bg-[#111] shadow-2xl group/image will-change-transform"
          >
            {/* Corner Framing Markers */}
            <div className="absolute top-3 left-3 z-30 font-mono text-[9px] text-[#c5a880] tracking-widest pointer-events-none">
              SYSTEM // {project.number}
            </div>
            <div className="absolute bottom-3 right-3 z-30 font-mono text-[9px] text-[#8e8a82] tracking-widest pointer-events-none">
              ACTIVE NODE
            </div>

            {/* Visual Graphic Representation */}
            <div
              ref={imageInnerRef}
              className="w-full h-full p-4 flex items-center justify-center bg-gradient-to-br from-[#18181b] via-[#0f0f11] to-[#09090b] transition-transform will-change-transform"
            >
              {/* If SVG exists, show it, along with customized high-end blueprint graphics */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-transform duration-500"
                onError={(e) => {
                  // Graceful fallback graphic if SVG fails to load
                  e.target.style.display = "none";
                }}
              />

              {/* Graphic Decorative Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Navigation / Scroll hint */}
      <div className="w-full flex items-center justify-between font-mono text-[10px] text-[#6f6c65] tracking-[0.25em] uppercase z-20">
        <span>AHAMMED ISTIAK ALAM EFTY // CSE ARCHIVE</span>
        <span>SCROLL TO NEXT STAGE ↓</span>
      </div>
    </section>
  );
}
