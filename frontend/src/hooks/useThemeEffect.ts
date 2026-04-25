import { useEffect } from 'react';
import { useThemeStore } from '@/stores';

export function useThemeEffect() {
  const { theme } = useThemeStore();
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
}
