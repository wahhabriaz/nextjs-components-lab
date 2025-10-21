"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Day03SmoothScroll = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let smoother;
    if (ScrollSmoother) {
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.4,
        effects: true,
      });
    } else {
      console.warn("ScrollSmoother not available — using normal scroll");
    }

    gsap.utils.toArray(".panel").forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      smoother && smoother.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      ref={containerRef}
      className="overflow-hidden w-full"
    >
      <div id="smooth-content">
        {/* Section 1 */}
        <section className="panel h-screen flex items-center justify-center bg-gradient-to-br from-sky-500 to-sky-700 text-white text-6xl font-bold">
          Day 03 – Section One
        </section>

        {/* Section 2 */}
        <section className="panel h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-rose-700 text-white text-6xl font-bold">
          Section Two
        </section>
      </div>
    </div>
  );
};

export default Day03SmoothScroll;
