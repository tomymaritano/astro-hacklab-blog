// LogoSVG.tsx
"use client";

import { motion } from "framer-motion";

export default function LogoSVG() {
  return (
    <motion.a
      href="/"
      className="text-xl font-extrabold text-black dark:text-white"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {/* Podés poner aquí un <svg> custom. Por ahora es solo texto */}
      Blog
    </motion.a>
  );
}