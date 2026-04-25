import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import i18n from '@/lib/i18n';
import type { LanguageState } from '@/types';

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'pt',
      setLanguage: (language) => {
        i18n.changeLanguage(language);
        set({ language });
      },
    }),
    { name: 'language-storage' },
  ),
);
