"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Search, X } from "lucide-react";

const mockPosts = [
  { title: "Cómo empezar con Astro y Tailwind", slug: "astro-tailwind-inicio" },
  { title: "Optimización de imágenes en sitios estáticos", slug: "optimizacion-imagenes-static" },
  { title: "Cómo usar Sanity como CMS en Astro", slug: "sanity-astro-cms" },
  { title: "Diseño minimalista: inspiración japonesa para devs", slug: "diseno-japones-devs" },
];

export default function SearchSpotlight() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(mockPosts);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter posts
  useEffect(() => {
    setFiltered(
      mockPosts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
    );
    setActiveIndex(-1);
  }, [query]);

  // Keyboard navigation and Cmd+K listener
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (e.key === "Escape") setOpen(false);
      if (open) {
        if (e.key === "ArrowDown") setActiveIndex((i) => (i + 1) % filtered.length);
        if (e.key === "ArrowUp") setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
        if (e.key === "Enter" && activeIndex >= 0) {
          window.location.href = `/posts/${filtered[activeIndex].slug}`;
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, filtered, activeIndex]);

  return (
    <>
      {/* Trigger */}
      <button
        className="text-black dark:text-white hover:text-indigo-500 transition"
        onClick={() => {
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 100);
        }}
        aria-label="Open search"
        title="Cmd + K"
      >
        <Search size={20} />
      </button>

      {/* Spotlight */}
      <AnimatePresence>
        {open && (
// Ejemplo de algunos cambios destacados
<motion.div
  role="dialog"
  aria-modal="true"
  className="relative bg-white/90 dark:bg-zinc-900/80 border border-white/30 backdrop-blur-xl rounded-xl p-4 w-[90%] max-w-xl shadow-2xl pointer-events-auto"
  onClick={(e) => e.stopPropagation()}
>
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-sm font-medium text-zinc-500">Buscar posts (⌘K)</h2>
    <button
      onClick={() => setOpen(false)}
      aria-label="Cerrar"
      className="text-zinc-400 hover:text-zinc-200 transition"
    >
      <X size={16} />
    </button>
  </div>

  <div className="relative mb-2">
    <Search className="absolute left-3 top-3 text-zinc-400" size={16} />
    <input
      ref={inputRef}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Escribe para filtrar resultados"
      className="w-full pl-10 pr-4 py-2 rounded-md bg-white/70 dark:bg-zinc-800 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      aria-label="Buscar posts"
    />
  </div>

  <ul role="listbox" className="max-h-64 overflow-y-auto mt-2 divide-y divide-white/10 text-sm">
    {filtered.length === 0 && (
      <li className="py-2 text-center text-zinc-500">Sin resultados</li>
    )}
    {filtered.map((post, i) => (
      <li
        key={post.slug}
        role="option"
        aria-selected={i === activeIndex}
        ref={(el) => {
          if (i === activeIndex && el) el.scrollIntoView({ block: "nearest" })
        }}
        className={`p-2 cursor-pointer flex items-center gap-2 transition ${
          i === activeIndex ? "bg-indigo-500/10" : ""
        }`}
        onClick={() => (window.location.href = `/posts/${post.slug}`)}
      >
        <FileText size={14} className="text-zinc-400" />
        {post.title}
      </li>
    ))}
  </ul>
</motion.div>
        )}
      </AnimatePresence>
    </>
  );
}