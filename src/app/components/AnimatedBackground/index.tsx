"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AnimatedBackground() {
  return (
    <motion.div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: `radial-gradient(circle at 10% 20%, #757575, transparent 50%),
                     radial-gradient(circle at 75% 35%, #000000, transparent 100%),
                     radial-gradient(circle at 45% 10%, #000000, transparent 100%),
                     radial-gradient(circle at 65% 30%, #757575, transparent 50%)`,
        filter: "blur(30px)",
        backgroundSize: "200% 200%",
        zIndex: -1,
      }}
      animate={{
        backgroundPosition: [
          "100% 100%",
          "40% 40%",
          "100% 0%",
          "40% 80%",
          "30% 80%",
        ],
      }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
      }}
    />
  );
}
