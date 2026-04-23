import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './locales/pt';
import en from './locales/en';
import es from './locales/es';
import ru from './locales/ru';
import zh from './locales/zh';
import hi from './locales/hi';

export const resources = {
  pt: { translation: pt },
  en: { translation: en },
  es: { translation: es },
  ru: { translation: ru },
  zh: { translation: zh },
  hi: { translation: hi },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
