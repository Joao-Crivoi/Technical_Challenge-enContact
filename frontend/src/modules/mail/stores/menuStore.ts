import { create } from 'zustand';
import type { SubMenu } from '../types';

interface MenuStore {
  selectedSubMenu: SubMenu | null;
  setSelectedSubMenu: (subMenu: SubMenu) => void;
}

export const useMenuStore = create<MenuStore>((set) => ({
  selectedSubMenu: null,
  setSelectedSubMenu: (subMenu) => set({ selectedSubMenu: subMenu }),
}));
