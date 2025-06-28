'use client';

import { motion } from 'framer-motion';

export default function LogoSVG() {
  return (
    <motion.a
      href="/"
      className="text-lg font-bold text-black dark:text-white"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
      style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
    >
      Tomy Maritano
    </motion.a>
  );
}
