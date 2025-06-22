"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import SearchSpotlight from "./SearchSpotlight";
import ThemeToggle from "./ThemeToggle";
import LogoSVG from "./LogoSVG";

const links = [{ href: "/", label: "Home" }];

interface NavbarProps {
  posts: { slug: string; data: { title: string } }[];
}

export default function Navbar({ posts }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false); 
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 100); 
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl bg-white/20 dark:bg-black/20 border-b border-white/10 dark:border-white/10"
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="max-w-4xl mx-auto w-full h-full px-4 sm:px-6 flex justify-between items-center">
        <div className="flex-none">
          <LogoSVG />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8 text-sm font-medium">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative text-black dark:text-white group transition"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop tools */}
        <div className="hidden md:flex flex-none items-center space-x-4">
          <SearchSpotlight posts={posts.map(post => ({ title: post.data.title, slug: post.slug }))} />
          <ThemeToggle />
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden flex-none p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </motion.header>
  );
}