'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search } from 'lucide-react';

interface Post {
  title: string;
  slug: string;
}

interface SearchSpotlightProps {
  posts: Post[];
  isMobile?: boolean;
}

export default function SearchSpotlight({ posts, isMobile = false }: SearchSpotlightProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(posts || []);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!posts || !Array.isArray(posts)) {
      setFiltered([]);
      return;
    }

    setFiltered(
      posts.filter(
        post => post && post.title && post.title.toLowerCase().includes(query.toLowerCase())
      )
    );
    setActiveIndex(-1);
  }, [query, posts]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(prev => !prev);
        setTimeout(() => inputRef.current?.focus(), 50);
      } else if (e.key === 'Escape') {
        setOpen(false);
      } else if (open) {
        if (e.key === 'ArrowDown') setActiveIndex(i => (i + 1) % filtered.length);
        if (e.key === 'ArrowUp') setActiveIndex(i => (i - 1 + filtered.length) % filtered.length);
        if (e.key === 'Enter' && activeIndex >= 0 && filtered[activeIndex]) {
          window.location.href = `/posts/${filtered[activeIndex].slug}`;
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, filtered, activeIndex]);

  return (
    <>
      <button
        className={`inline-flex items-center space-x-2 transition ${
          isMobile 
            ? 'text-white hover:text-indigo-400' 
            : 'text-black dark:text-white hover:text-indigo-500'
        }`}
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        aria-label="Search posts"
        title="Cmd + K"
      >
        <Search size={24} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              className="bg-zinc-900 text-white border border-zinc-800 rounded-2xl p-6 w-full max-w-2xl shadow-2xl mt-60"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              {/* Acá tu contenido del modal */}
              <h2 className="text-sm font-medium mb-4">Search posts (Cmd+K)</h2>
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Type to search posts..."
                className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm mb-4"
              />

              <ul className="max-h-64 overflow-y-auto divide-y divide-zinc-800 text-sm">
                {filtered.length === 0 ? (
                  <li className="py-2 text-center text-zinc-500">No results</li>
                ) : (
                  filtered.map((post, i) => (
                    <li
                      key={post.slug}
                      className={`p-2 cursor-pointer flex items-center gap-2 transition ${
                        i === activeIndex ? 'bg-zinc-800' : ''
                      }`}
                      onClick={() => (window.location.href = `/posts/${post.slug}`)}
                    >
                      <FileText size={14} className="text-zinc-500" />
                      {post.title}
                    </li>
                  ))
                )}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
