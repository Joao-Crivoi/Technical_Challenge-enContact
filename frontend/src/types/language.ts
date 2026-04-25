import { languages } from '@/constants';

export type Language = (typeof languages)[number];

export interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}
