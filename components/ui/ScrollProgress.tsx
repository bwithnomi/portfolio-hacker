"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#00ff41] origin-left z-50"
      style={{ scaleX, boxShadow: "0 0 10px rgba(0, 255, 65, 0.5)" }}
    />
  );
}


