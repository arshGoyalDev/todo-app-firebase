"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-898vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          className="flex gap-10 items-center px-[5vw] md:px-[10vw] min-w-[920vw] md:min-w-[830vw] h-screen relative"
          ref={sectionRef}
        >
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            1
          </div>
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            2
          </div>
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            3
          </div>
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            4
          </div>
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            5
          </div>
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            6
          </div>
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            7
          </div>
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            8
          </div>
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            9
          </div>
          <div className="grid place-content-center text-9xl font-bold min-w-[90vw] md:min-w-[80vw] h-[70vh] md:h-[60vh] rounded-xl bg-gray-50 dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800">
            10
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
