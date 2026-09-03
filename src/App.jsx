import React, { useState } from "react";
import { useLenis } from "./animations/useLenis";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import WorkTransition from "./components/WorkTransition";
import ProjectItem from "./components/ProjectItem";
import Contact from "./components/Contact";
import { projectsData } from "./data/projects";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  // Initialize Lenis smooth inertial scrolling integrated with GSAP ScrollTrigger
  useLenis();

  return (
    <div className="relative min-h-screen w-full bg-[#070707] text-[#f5f0e8] overflow-x-hidden selection:bg-[#c5a880] selection:text-[#070707]">
      {/* 1. Cinematic Loading Screen (00 -> 100% split curtain reveal) */}
      <Loader onComplete={() => setLoaded(true)} />

      {/* 2. Interactive Custom Cursor with Lerp & Context Modes */}
      <CustomCursor />

      {/* 3. Floating Editorial Navbar */}
      <Navbar />

      {/* 4. Master Continuous Scroll Scenes */}
      <main className="relative w-full overflow-x-hidden">
        {/* Scene 1: Hero (Pinned Scroll Scrub: Warm cream transforms to black -> morphs into About) */}
        <Hero ready={loaded} />

        {/* Scene 2: About (Editorial masked text lines, philosophy, and parallax portrait) */}
        <About />

        {/* Scene 3: Expertise (Technical blueprint list & slow-drifting floating tech tags) */}
        <Expertise />

        {/* Scene 4: Expertise -> Work Dramatic Transition (3.5x scaling WORK + velocity marquee) */}
        <WorkTransition />

        {/* Scene 5: Pinned Project 01 — NEED BLOOD */}
        <ProjectItem
          project={projectsData[0]}
          index={0}
          total={projectsData.length}
        />

        {/* Scene 6: Pinned Project 02 — MINI COMPILER */}
        <ProjectItem
          project={projectsData[1]}
          index={1}
          total={projectsData.length}
        />

        {/* Scene 7: Pinned Project 03 — UNIVERSITY TRANSPORT SYSTEM */}
        <ProjectItem
          project={projectsData[2]}
          index={2}
          total={projectsData.length}
        />

        {/* Scene 8: Contact & Footer (Kinetic typography, magnetic button, verified socials, giant EFTY wordmark) */}
        <Contact />
      </main>
    </div>
  );
}
