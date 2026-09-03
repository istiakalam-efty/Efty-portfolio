import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const cursorTextRef = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable custom cursor on mobile / touch devices
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024
    ) {
      setIsTouch(true);
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    const textEl = cursorTextRef.current;
    if (!dot || !ring) return;

    // Mouse coordinates
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    // Ring delayed coordinates (lerp)
    const ringPos = { x: mouse.x, y: mouse.y };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Position dot immediately
      gsap.set(dot, { x: mouse.x, y: mouse.y });
    };

    // Smooth lerp loop for outer ring
    const ticker = gsap.ticker.add(() => {
      ringPos.x += (mouse.x - ringPos.x) * 0.16;
      ringPos.y += (mouse.y - ringPos.y) * 0.16;
      gsap.set(ring, { x: ringPos.x, y: ringPos.y });
    });

    // Delegated hover detection using data-attributes
    const onMouseOver = (e) => {
      const target = e.target.closest(
        "[data-cursor], [data-cursor-text], a, button, [role='button']"
      );

      if (target) {
        setIsHovered(true);
        const text = target.getAttribute("data-cursor-text");
        const mode = target.getAttribute("data-cursor");

        if (text) {
          setCursorText(text);
          gsap.to(ring, {
            scale: 2.8,
            backgroundColor: "rgba(245, 240, 232, 0.95)",
            borderColor: "rgba(245, 240, 232, 1)",
            mixBlendMode: "difference",
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 });
        } else if (mode === "view") {
          setCursorText("VIEW");
          gsap.to(ring, {
            scale: 2.8,
            backgroundColor: "rgba(245, 240, 232, 0.95)",
            borderColor: "rgba(245, 240, 232, 1)",
            mixBlendMode: "difference",
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 });
        } else if (mode === "explore") {
          setCursorText("EXPLORE");
          gsap.to(ring, {
            scale: 2.6,
            backgroundColor: "rgba(197, 168, 128, 0.95)",
            borderColor: "rgba(197, 168, 128, 1)",
            mixBlendMode: "difference",
            duration: 0.3,
            ease: "power2.out"
          });
          gsap.to(dot, { scale: 0, opacity: 0, duration: 0.2 });
        } else {
          setCursorText("");
          gsap.to(ring, {
            scale: 1.8,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderColor: "rgba(255, 255, 255, 0.6)",
            duration: 0.25,
            ease: "power2.out"
          });
          gsap.to(dot, { scale: 1.4, duration: 0.25 });
        }
      }
    };

    const onMouseOut = (e) => {
      const target = e.target.closest(
        "[data-cursor], [data-cursor-text], a, button, [role='button']"
      );
      if (target) {
        setIsHovered(false);
        setCursorText("");
        gsap.to(ring, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(245, 240, 232, 0.45)",
          mixBlendMode: "normal",
          duration: 0.3,
          ease: "power2.out"
        });
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      gsap.ticker.remove(ticker);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Precision inner dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 -ml-[4px] -mt-[4px] w-2 h-2 rounded-full bg-[#f5f0e8] z-[9999] will-change-transform mix-blend-difference"
      />
      {/* Outer lagging ring */}
      <div
        ref={cursorRingRef}
        className="pointer-events-none fixed top-0 left-0 -ml-5 -mt-5 w-10 h-10 rounded-full border border-[rgba(245,240,232,0.45)] z-[9998] will-change-transform flex items-center justify-center transition-colors duration-200"
      >
        <span
          ref={cursorTextRef}
          className="text-[9px] font-bold tracking-widest uppercase text-[#0a0a0a] select-none text-center leading-none"
        >
          {cursorText}
        </span>
      </div>
    </>
  );
}
