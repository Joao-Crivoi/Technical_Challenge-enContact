import { FaSun, FaMoon } from 'react-icons/fa';
import { useThemeStore } from '@/stores';
import { Button } from '@/components/ui';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      aria-label="Alternar tema"
      className="p-2"
    >
      {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
    </Button>
  );
}
