"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HideRevealNav = () => {
  const navRef = useRef(null);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const nav = navRef.current;

    // Initial GSAP setup
    gsap.set(nav, { y: 0 });

    const handleScroll = () => {
      debugger;
      const currentScroll = window.scrollY;

      // Scroll Down → Hide Nav
      if (currentScroll > lastScroll && currentScroll > 20) {
        gsap.to(nav, { y: "-100%", duration: 0.2, ease: "power2.out" });
      }
      // Scroll Up → Show Nav
      else if (currentScroll < lastScroll) {
        gsap.to(nav, { y: "0%", duration: 0.2, ease: "power2.out" });
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className="relative w-full">
      {/* 🌐 NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white flex justify-between items-center px-8 py-4 transition-all duration-500"
      >
        <h1 className="text-2xl font-bold tracking-wide">NavBar</h1>
        <ul className="flex gap-6 text-sm uppercase font-medium">
          <li className="hover:text-sky-400 cursor-pointer">Home</li>
          <li className="hover:text-sky-400 cursor-pointer">About</li>
          <li className="hover:text-sky-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* 🟩 SECTION 1 */}
      <section className="h-screen bg-sky-400 flex items-center justify-center text-white text-5xl font-bold">
        Section One
      </section>

      {/* 🟨 SECTION 2 */}
      <section className="h-screen bg-yellow-400 flex items-center justify-center text-black text-5xl font-bold">
        Section Two
      </section>

      {/* 🟥 SECTION 3 */}
      <section className="h-screen bg-red-500 flex items-center justify-center text-white text-5xl font-bold">
        Section Three
      </section>
    </div>
  );
};

export default HideRevealNav;
