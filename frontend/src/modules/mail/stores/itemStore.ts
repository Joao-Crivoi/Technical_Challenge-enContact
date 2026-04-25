import { create } from 'zustand';

interface ItemStore {
  selectedIds: Set<string>;
  toggleItem: (id: string) => void;
  clearSelection: () => void;
}

export const useItemStore = create<ItemStore>((set) => ({
  selectedIds: new Set(),
  toggleItem: (id) =>
    set((state) => {
      const next = new Set(state.selectedIds);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return { selectedIds: next };
    }),
  clearSelection: () => set({ selectedIds: new Set() }),
}));
