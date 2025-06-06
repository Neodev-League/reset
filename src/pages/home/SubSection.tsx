"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  // useSpring,
  // useVelocity,
} from "framer-motion";
import webimg1 from "@/src/assets/event/e4.jpg";
import webimg2 from "@/src/assets/event/e5.jpg";

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();  // Removed target and offset to track global scroll

  // const scrollVelocity = useVelocity(scrollY);
  // const smoothVelocity = useSpring(scrollVelocity, {
  //   damping: 50,
  //   stiffness: 400,
  // });

  // const velocityFactor = useTransform(
  //   smoothVelocity,
  //   [-1000, 0, 1000],
  //   [-1, 0, 1],
  //   {
  //     clamp: false,
  //   }
  // );

  // Adjusted transform values for more noticeable movement
  const x1 = useTransform(scrollY, [0, 1000], [-600, 0]);  // Linear movement based on scroll
  const x2 = useTransform(scrollY, [0, 1000], [600, 0]);   // Linear movement based on scroll
  const rotate1 = useTransform(scrollY, [0, 1000], [25, 0]); // Rotation based on scroll
  const rotate2 = useTransform(scrollY, [0, 1000], [-25, 0]); // Rotation based on scroll

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-24 overflow-hidden relative"
    >
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-[#065f46] mb-8 leading-tight">
            turn your <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#065f46] to-[#34D399]">
              passion to life.
            </span>
          </h2>

          <p className="text-[#065f46]/70 text-lg max-w-2xl mx-auto">
            this is where you will take any idea you're excited about, figure
            out how to bring it to life, and share it with the world. working
            with your team of ten allows you to learn from each other, and build
            something that you're proud of.
          </p>
        </div>
      </div>

      {/* Floating Images Section with Enhanced Animation */}
      <motion.div
        className="relative h-[70vh] mb-48"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            perspective: 1000,
          }}
        >
          <motion.div
            style={{
              x: x1,
              rotateY: rotate1,
              z: 100,
            }}
            className="absolute w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={webimg1}
              alt="Decorative"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="absolute z-75 font-bold text-[#065f46] text-center transform -translate-x-1/2 left-1/2 w-full max-w-[800px]">
            <span className="text-transparent text-6xl bg-clip-text bg-linear-to-r from-[#065f46] via-[#34D399] to-[#065f46] 
                        bg-size-200 animate-gradient-x tracking-tight hover:scale-105 transition-transform duration-300">
              wrdsb dev summit
            </span>
            <br />
            <span className="text-4xl inline-block mt-4 font-extrabold tracking-widest bg-linear-to-r from-[#065f46] to-[#34D399] text-transparent bg-clip-text">
              26.10.24
            </span>
            <br />
            <div className="text-2xl mt-4 font-medium tracking-wide text-[#065f46]/80 animate-pulse flex flex-col xl:flex-row items-center justify-center gap-2">
              <span>100 Participants • 10 Schools</span>
              <span className="hidden xl:inline">•</span>
              <i>100 Handmade Sandwiches</i>
            </div>
          </div>
          <motion.div
            style={{
              x: x2,
              rotateY: rotate2,
              z: 50,
            }}
            className="absolute w-[500px] h-[300px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={webimg2}
              alt="Decorative"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Info Sections */}
      <div className="container mx-auto px-4 space-y-32">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-[#34D399] mb-4">remember!</div>
          <h3 className="text-4xl md:text-6xl font-bold text-[#065f46] mb-6">
            not just a hackathon.
          </h3>
          <p className="text-[#065f46]/70 text-lg">
            we're a community of developers
            who are passionate about building things that matter. we're not
            a hackathon, we're a movement with new systems and implementations
            that will change the future of building forever.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-[#34D399] mb-4">cha-ching!</div>
          <h3 className="text-4xl md:text-6xl font-bold text-[#065f46] mb-6">
            no money? np.
          </h3>
          <p className="text-[#065f46]/70 text-lg">
            we have a new funding model that allows participants to focus on building
            without worrying about the financial side of things during the
            event. all you need is a laptop and a passion for innovation.
          </p>
        </div>
      </div>
    </section>
  );
}
