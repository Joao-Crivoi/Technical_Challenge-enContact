import { useLanguageStore } from '@/stores';
import { languages } from '@/constants';
import { type Language } from '@/types';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguageStore();
  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      aria-label="Selecionar idioma"
      className="lang-select"
    >
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
