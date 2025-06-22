"use client";

import * as Switch from "@radix-ui/react-switch";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved === "dark" || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = (checked: boolean) => {
    setDark(checked);
    document.documentElement.classList.toggle("dark", checked);
    localStorage.setItem("theme", checked ? "dark" : "light");
  };

  // Antes del return
  const [sparks, setSparks] = useState<number[]>([]);

  useEffect(() => {
    setSparks([1, 2, 3, 4, 5]); // cada vez que cambia dark
    const t = setTimeout(() => setSparks([]), 800); // limpiar sparks después de 0.8s
    return () => clearTimeout(t);
  }, [dark]);
  return (
    <Switch.Root
      checked={dark}
      onCheckedChange={toggleTheme}
      className="relative w-17 h-10 flex items-center justify-between px-2 rounded-full bg-white/20 dark:bg-white/10 border border-white/20 backdrop-blur-md shadow-inner transition-all duration-300"
    >
      {/* Íconos fijos */}
      <Sun
        size={16}
        className={`transition-opacity duration-300 ${dark ? "opacity-30 text-yellow-300" : "opacity-100 text-yellow-400"}`}
      />
      <Moon
        size={16}
        className={`transition-opacity duration-300 ${dark ? "opacity-100 text-zinc-100" : "opacity-30 text-zinc-400"}`}
      />

      {/* Thumb animado */}
      <Switch.Thumb asChild>
        <motion.div
          className="absolute left-0 right-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg border border-indigo-300 text-white"
          layout
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          animate={{ x: dark ? 32 : 2, rotate: dark ? 360 : 0 }}
        >
          <motion.div
            key={dark ? "moon" : "sun"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {dark ? <Moon size={16} className="text-yellow-200" /> : <Sun size={16} className="text-white" />}
          </motion.div>
        </motion.div>
      </Switch.Thumb>
    </Switch.Root>
  );
}