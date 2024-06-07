'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FadeUpStagger() {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0,  transition: { type: "spring" } },
  };
  return (
    <motion.div
    ref={ref}
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
          },
        },
      }}
    >
      <motion.h1
        className="text-center font-display text-transparent bg-clip-text  bg-gradient-to-b  from-white to-gray-400 text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        Our Work 
      </motion.h1>
      <motion.p
        className="mt-6  text-center  text-lg text-slate-300 "
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
       Explore our latest projects and see how we bring ideas to life. We have edited 6,500+ videos for our clients
      </motion.p>
      <motion.div
        className="mx-auto mt-6 flex items-center justify-center space-x-5"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
       
      </motion.div>
    </motion.div>
  );
}