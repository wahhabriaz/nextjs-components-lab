"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextScrollSections = () => {
  // Unique refs
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const heading3Ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heading1Ref.current,
      { yPercent: 0 },
      {
        y: "55vh",

        ease: "power2.out",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top top",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    // SECTION 2 — sunrise + sunset
    // gsap.fromTo(
    //   heading2Ref.current,
    //   { y: "-58vh" },
    //   {
    //     y: "0vh",
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: section2Ref.current,
    //       start: "top 60%",
    //       end: "top top", // ends early
    //       scrub: true,
    //       markers: true,
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   heading2Ref.current,
    //   { y: "0vh" },
    //   {
    //     y: "55vh",
    //     ease: "none",
    //     scrollTrigger: {
    //       trigger: section2Ref.current,
    //       start: "top top",
    //       end: "bottom center", // ends early
    //       scrub: true,
    //       markers: true,
    //     },
    //   }
    // );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section2Ref.current,
        start: "top 60%",
        end: "bottom center",
        scrub: true,
      },
    });

    tl2
      .fromTo(
        heading2Ref.current,
        { y: "-58vh" },
        { y: "0vh", ease: "power2.out" }
      )
      .to(heading2Ref.current, {
        y: "55vh",

        ease: "power2.inOut",
      });

    gsap.fromTo(
      heading3Ref.current,
      { y: "-55vh" },
      {
        y: "0vh",

        ease: "power2.out",
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top 60%",
          end: "top top",
          scrub: true,
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <section
        ref={section1Ref}
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url(/Day01-1.jpg)" }}
      >
        <h3
          ref={heading1Ref}
          className="text-5xl md:text-8xl font-bold text-white text-center drop-shadow-lg"
        >
          Welcome to the Future
        </h3>
      </section>

      <section
        ref={section2Ref}
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url(/Day01-2.jpg)" }}
      >
        <h3
          ref={heading2Ref}
          className="text-5xl md:text-8xl font-bold text-white text-center drop-shadow-lg"
        >
          Design Beyond Limits
        </h3>
      </section>

      <section
        ref={section3Ref}
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url(/Day01-3.jpg)" }}
      >
        <h3
          ref={heading3Ref}
          className="text-5xl md:text-8xl font-bold text-white text-center drop-shadow-lg"
        >
          Innovation in Motion
        </h3>
      </section>
    </div>
  );
};

export default TextScrollSections;
