'use client';

import * as Switch from '@radix-ui/react-switch';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = (checked: boolean) => {
    setDark(checked);
    document.documentElement.classList.toggle('dark', checked);
    localStorage.setItem('theme', checked ? 'dark' : 'light');
  };

  return (
    <Switch.Root
      checked={dark}
      onCheckedChange={toggleTheme}
      className="relative w-20 h-10 flex items-center rounded-full bg-white/20 dark:bg-white/10 border border-black/20 dark:border-black/20 backdrop-blur-md shadow-inner cursor-pointer"
    >
      {/* Íconos fijos */}
      <Sun
        className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
          dark ? 'opacity-30 text-yellow-200' : 'opacity-100 text-orange-400'
        }`}
        size={16}
      />
      <Moon
        className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
          dark ? 'opacity-100 text-yellow-200' : 'opacity-30 text-zinc-900'
        }`}
        size={16}
      />

      {/* Thumb animado */}
      <Switch.Thumb asChild>
        <motion.div
          className={`absolute w-8 h-8 rounded-full flex items-center justify-center shadow-lg border border-white/20 transition-colors duration-500 ${
            dark ? 'bg-gray-950' : 'bg-indigo-600'
          }`}
          layout
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          animate={{ x: dark ? 42 : 2, rotate: dark ? 360 : 0 }}
        >
          <motion.div
            key={dark ? 'moon' : 'sun'}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {dark ? (
              <Moon size={16} className="text-white" />
            ) : (
              <Sun size={16} className="text-white" />
            )}
          </motion.div>
        </motion.div>
      </Switch.Thumb>
    </Switch.Root>
  );
}
