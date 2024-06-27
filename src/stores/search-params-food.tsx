import { create } from 'zustand';

interface SearchParamsFoodState {
  searchTerm: [];
  setSearchTerm: (searchTerm: []) => void;
}

const useSearchParamsFoodStore = create<SearchParamsFoodState>((set) => ({
  searchTerm: [],
  setSearchTerm: (searchTerm) => set({ searchTerm }),
}));

export default useSearchParamsFoodStore;
