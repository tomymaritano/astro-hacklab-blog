'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import SearchSpotlight from './SearchSpotlight';
import ThemeToggle from './ThemeToggle';
import LogoSVG from './LogoSVG';

const links = [{ href: '/', label: '' }];

interface NavbarProps {
  posts: { slug: string; data: { title: string } }[];
}

export default function Navbar({ posts }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Ocultar navbar al scrollear hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 100);
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Cerrar automáticamente el menú si el ancho es mayor a 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false); // cierra menú si pasa a desktop
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl bg-white/20 dark:bg-black/20 border-b border-white/10 dark:border-white/10"
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="max-w-3xl mx-auto h-full px-4 sm:px-6 flex justify-between items-center">
          <LogoSVG />
          {/* Desktop */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 text-md font-medium">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative text-black dark:text-white group transition"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop tools */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-black dark:text-white hover:text-indigo-500 transition"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <SearchSpotlight
              posts={posts.map(post => ({ title: post.data.title, slug: post.slug }))}
            />
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-black dark:text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/70 dark:bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="flex flex-col items-center space-y-8"
              onClick={e => e.stopPropagation()}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 250, damping: 24 }}
            >
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-2xl font-medium text-white hover:text-indigo-500 relative after:block after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}

              <div className="w-24 border-t border-white/20" />

              <div className="flex flex-col items-center space-y-6 mt-6">
                <a
                  href="https://github.com/tu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-black dark:text-white hover:text-indigo-500 transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <SearchSpotlight
                  posts={posts.map(post => ({ title: post.data.title, slug: post.slug }))}
                />
                <ThemeToggle />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
