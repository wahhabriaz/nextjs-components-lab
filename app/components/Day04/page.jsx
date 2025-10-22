"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Day04PixelTransition = () => {
  const gridRef = useRef(null);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const grid = gridRef.current;
    const rows = 8;
    const cols = 12;

    grid.innerHTML = "";

    for (let i = 0; i < rows * cols; i++) {
      const pixel = document.createElement("div");
      pixel.className = "pixel bg-black";
      grid.appendChild(pixel);
    }

    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    grid.style.position = "absolute";
    grid.style.top = 0;
    grid.style.left = 0;
    grid.style.width = "100%";
    grid.style.height = "100%";

    const pixels = grid.querySelectorAll(".pixel");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: grid,
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
    });

    tl.fromTo(
      pixels,
      { scale: 1, opacity: 1 },
      {
        scale: 1,
        opacity: 0,
        stagger: {
          amount: 0.9,
          grid: [rows, cols],
          from: "random",
        },
        ease: "power2.inOut",
      }
    );
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-amber-600 flex items-center justify-center bg-[url(/Day04-1.jpg)] bg-center">
        <h3 className=" text-6xl font-bold text-amber-50 animate-bounce">
          Scroll Down
        </h3>
      </div>

      <div className="relative w-full h-screen overflow-hidden">
        <div
          className={`absolute bg-cover bg-no-repeat inset-0 flex items-center justify-center text-6xl font-bold transition-colors duration-700 ${
            showNext
              ? "bg-[url(/Day04-3.jpg)] bg-center text-white"
              : "bg-[url(/Day04-2.jpg)] bg-center text-white"
          }`}
        >
          {showNext ? "Next Section" : "Day 04 – Pixel Transition"}
        </div>

        <div ref={gridRef} className="pointer-events-none"></div>

        <button
          onClick={() => {
            setShowNext(!showNext);
            const pixels = gridRef.current.querySelectorAll(".pixel");

            gsap.fromTo(
              pixels,
              { scale: 1, opacity: 1 },
              {
                scale: 1,
                opacity: 0,
                duration: 0.4,
                stagger: {
                  amount: 1.8,
                  grid: [15, 25],
                  from: "random",
                },
                ease: "power2.inOut",
                onComplete: () => setShowNext((s) => !s),
              }
            );
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-200 transition animate-pulse hover:animate-none hover:cursor-pointer"
        >
          Trigger Pixel Transition
        </button>
      </div>
      <div
        className="w-full h-screen bg-indigo-600 flex items-center justify-center bg-[url(/Day04-4.jpg)] bg-cover bg-no-repeat
"
      >
        <h3 className=" text-6xl font-bold animate-bounce text-amber-50 ">
          Scroll Up
        </h3>
      </div>
    </>
  );
};

export default Day04PixelTransition;
