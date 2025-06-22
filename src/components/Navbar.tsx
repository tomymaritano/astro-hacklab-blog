"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchSpotlight from "./SearchSpotlight";
import ThemeToggle from "./ThemeToggle";
import LogoSVG from "./LogoSVG";

const links = [{ href: "/", label: "Home" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false); // navbar visible/invisible
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50); // Compact padding
      setHidden(currentY > lastScrollY && currentY > 100); // Hide on scroll-down past 100px
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/20 dark:bg-black/20 border-b border-white/10 dark:border-white/10 transition-all ${
        scrolled ? "py-2 shadow-md" : "py-3"
      }`}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex-none">
          <LogoSVG />
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8 text-sm font-medium">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-black dark:text-white group transition"
            >
              {label}
              <span
                className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex flex-none items-center space-x-4">
          <SearchSpotlight />
          <ThemeToggle />
        </div>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="bg-black/80 border border-white/20 backdrop-blur-xl shadow-2xl rounded-md p-6 w-72 flex flex-col items-center space-y-4"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-white text-lg font-medium group"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <div className="flex space-x-4 mt-2">
                <SearchSpotlight />
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}