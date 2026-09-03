import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const containerRef = useRef(null);
  const leftCurtainRef = useRef(null);
  const rightCurtainRef = useRef(null);
  const centerContentRef = useRef(null);
  const wordmarkRef = useRef(null);
  const counterRef = useRef(null);
  const seamRef = useRef(null);

  useEffect(() => {
    // Counter progression object
    const counterObj = { value: 0 };
    const tl = gsap.timeline();

    // 1. Rapid progress count from 0 to 100 in ~1.2 seconds with exponential curve
    tl.to(counterObj, {
      value: 100,
      duration: 1.25,
      ease: "power2.inOut",
      onUpdate: () => {
        setPercent(Math.floor(counterObj.value));
      }
    });

    // 2. When loading reaches 100: percentage disappears, EFTY moves, screen splits
    tl.to(
      counterRef.current,
      {
        opacity: 0,
        y: -15,
        duration: 0.2,
        ease: "power2.in"
      },
      "+=0.05"
    );

    tl.to(
      seamRef.current,
      {
        opacity: 0,
        scaleY: 0,
        duration: 0.2,
        ease: "power2.in"
      },
      "<"
    );

    tl.to(
      wordmarkRef.current,
      {
        y: -30,
        scale: 1.12,
        letterSpacing: "0.4em",
        opacity: 0,
        duration: 0.45,
        ease: "expo.out"
      },
      "-=0.1"
    );

    // 3. Black screen splits / reveals: dual curtain slide + wipe reveal
    tl.to(
      leftCurtainRef.current,
      {
        xPercent: -101,
        duration: 0.85,
        ease: "expo.inOut"
      },
      "-=0.2"
    );

    tl.to(
      rightCurtainRef.current,
      {
        xPercent: 101,
        duration: 0.85,
        ease: "expo.inOut"
      },
      "<"
    );

    // 4. Trigger hero animation immediately as the curtain opens
    tl.call(() => {
      if (onComplete) onComplete();
    }, null, "-=0.55");

    // Clean up loader container
    tl.set(containerRef.current, {
      display: "none"
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  // Format percent to 2 digits (00 -> 09 -> 100)
  const formattedPercent =
    percent < 10 ? `0${percent}` : percent === 100 ? "100" : `${percent}`;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] pointer-events-none flex items-center justify-center overflow-hidden"
    >
      {/* Split Curtains (Left and Right halves) */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-[#050505] will-change-transform z-10"
      />
      <div
        ref={rightCurtainRef}
        className="absolute top-0 right-0 w-1/2 h-full bg-[#050505] will-change-transform z-10"
      />

      {/* Center Golden Hairline Seam */}
      <div
        ref={seamRef}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#c5a880] to-transparent z-20 origin-center"
      />

      {/* Center content */}
      <div
        ref={centerContentRef}
        className="relative z-30 flex flex-col items-center justify-center text-center select-none"
      >
        {/* Monogram / Wordmark */}
        <div className="overflow-hidden mb-2">
          <h1
            ref={wordmarkRef}
            className="font-['Syne',sans-serif] text-4xl sm:text-6xl font-extrabold tracking-[0.25em] text-[#f5f0e8] uppercase"
          >
            EFTY
          </h1>
        </div>

        {/* Counter and status */}
        <div
          ref={counterRef}
          className="flex flex-col items-center gap-2 font-mono text-xs tracking-widest text-[#a39e93]"
        >
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
            <span className="text-xl sm:text-2xl font-bold text-[#f5f0e8] tabular-nums">
              {formattedPercent}
            </span>
            <span className="text-[#666]">%</span>
          </div>

          <div className="w-24 h-[1px] bg-[rgba(255,255,255,0.12)] overflow-hidden rounded-full mt-1">
            <div
              className="h-full bg-[#c5a880] transition-all duration-75"
              style={{ width: `${percent}%` }}
            />
          </div>

          <span className="text-[10px] uppercase text-[#6f6c65] tracking-[0.3em] mt-1">
            INITIALIZING EXPERIENCE
          </span>
        </div>
      </div>
    </div>
  );
}
