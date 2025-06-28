'use client';

import { useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Search, Clock, X } from 'lucide-react';
import { useSearchStore, type Post } from '../stores/searchStore';

interface SearchSpotlightProps {
  posts: Post[];
  isMobile?: boolean;
}

export default function SearchSpotlight({ posts, isMobile = false }: SearchSpotlightProps) {
  const {
    isSearchOpen,
    searchQuery,
    searchResults,
    recentSearches,
    openSearch,
    closeSearch,
    setSearchQuery,
    setSearchResults,
    addRecentSearch,
    clearRecentSearches,
  } = useSearchStore();

  const inputRef = useRef<HTMLInputElement>(null);
  const activeIndexRef = useRef(-1);

  const filtered = useMemo(() => {
    return searchQuery.trim() ? searchResults : [];
  }, [searchQuery, searchResults]);

  // Update search results when query or posts change
  useEffect(() => {
    if (!posts || !Array.isArray(posts)) {
      setSearchResults([]);
      return;
    }

    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results = posts.filter(
      post => post && post.title && post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
    activeIndexRef.current = -1;
  }, [searchQuery, posts, setSearchResults]);

  // Handle keyboard shortcuts and navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isSearchOpen) {
          closeSearch();
        } else {
          openSearch();
          setTimeout(() => inputRef.current?.focus(), 50);
        }
      } else if (e.key === 'Escape') {
        closeSearch();
      } else if (isSearchOpen) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          activeIndexRef.current = Math.min(activeIndexRef.current + 1, filtered.length - 1);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          activeIndexRef.current = Math.max(activeIndexRef.current - 1, -1);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const selectedPost = filtered[activeIndexRef.current];
          if (activeIndexRef.current >= 0 && selectedPost) {
            handlePostClick(selectedPost);
          }
        }
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isSearchOpen, filtered, openSearch, closeSearch, handlePostClick]);

  const handlePostClick = useCallback(
    (post: Post) => {
      if (searchQuery.trim()) {
        addRecentSearch(searchQuery);
      }
      closeSearch();
      window.location.href = `/posts/${post.slug}`;
    },
    [searchQuery, addRecentSearch, closeSearch]
  );

  const handleRecentSearchClick = useCallback(
    (query: string) => {
      setSearchQuery(query);
      setTimeout(() => inputRef.current?.focus(), 50);
    },
    [setSearchQuery]
  );

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isSearchOpen]);

  return (
    <>
      <button
        className={`inline-flex items-center space-x-2 transition ${
          isMobile
            ? 'text-white hover:text-indigo-400'
            : 'text-black dark:text-white hover:text-indigo-500'
        }`}
        onClick={() => {
          openSearch();
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        aria-label="Search posts"
        title="Cmd + K"
      >
        <Search size={24} />
      </button>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            onClick={closeSearch}
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
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium">Search posts</h2>
                <div className="flex items-center space-x-2 text-xs text-zinc-400">
                  <kbd className="px-2 py-1 bg-zinc-800 rounded">Cmd+K</kbd>
                  <span>to toggle</span>
                </div>
              </div>

              <div className="relative mb-4">
                <input
                  ref={inputRef}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Type to search posts..."
                  className="w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-2.5 text-zinc-400 hover:text-white"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Recent searches when no query */}
              {!searchQuery.trim() && recentSearches.length > 0 && (
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-medium text-zinc-400">Recent searches</h3>
                    <button
                      onClick={clearRecentSearches}
                      className="text-xs text-zinc-400 hover:text-white"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((query, i) => (
                      <button
                        key={i}
                        onClick={() => handleRecentSearchClick(query)}
                        className="flex items-center space-x-1 px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-xs transition"
                      >
                        <Clock size={12} className="text-zinc-500" />
                        <span>{query}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Search results */}
              <div className="max-h-64 overflow-y-auto">
                {searchQuery.trim() && (
                  <div className="text-xs text-zinc-400 mb-2">
                    {filtered.length} result{filtered.length !== 1 ? 's' : ''}
                  </div>
                )}

                <ul className="divide-y divide-zinc-800 text-sm">
                  {searchQuery.trim() && filtered.length === 0 ? (
                    <li className="py-4 text-center text-zinc-500">
                      No posts found for &quot;{searchQuery}&quot;
                    </li>
                  ) : (
                    filtered.map((post, i) => (
                      <button
                        key={post.slug}
                        className={`w-full p-3 cursor-pointer flex items-center gap-3 transition hover:bg-zinc-800 text-left ${
                          i === activeIndexRef.current ? 'bg-zinc-800' : ''
                        }`}
                        onClick={() => handlePostClick(post)}
                      >
                        <FileText size={16} className="text-zinc-500 flex-shrink-0" />
                        <span className="flex-1">{post.title}</span>
                      </button>
                    ))
                  )}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
