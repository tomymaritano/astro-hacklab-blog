import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Post {
  title: string;
  slug: string;
}

interface SearchState {
  // Search functionality
  isSearchOpen: boolean;
  searchQuery: string;
  searchResults: Post[];
  recentSearches: string[];

  // Actions
  openSearch: () => void;
  closeSearch: () => void;
  setSearchQuery: (query: string) => void;
  setSearchResults: (results: Post[]) => void;
  addRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set, get) => ({
      // State
      isSearchOpen: false,
      searchQuery: '',
      searchResults: [],
      recentSearches: [],

      // Actions
      openSearch: () => set({ isSearchOpen: true }),
      closeSearch: () => set({ isSearchOpen: false, searchQuery: '', searchResults: [] }),

      setSearchQuery: (query: string) => set({ searchQuery: query }),

      setSearchResults: (results: Post[]) => set({ searchResults: results }),

      addRecentSearch: (query: string) => {
        const { recentSearches } = get();
        const trimmedQuery = query.trim();

        if (trimmedQuery && !recentSearches.includes(trimmedQuery)) {
          const newRecent = [trimmedQuery, ...recentSearches.slice(0, 4)]; // Keep last 5
          set({ recentSearches: newRecent });
        }
      },

      clearRecentSearches: () => set({ recentSearches: [] }),
    }),
    {
      name: 'search-storage',
      partialize: state => ({
        recentSearches: state.recentSearches,
      }), // Only persist recent searches
    }
  )
);
