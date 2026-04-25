import { useState, useEffect } from 'react';
import { fetchMenus } from '../services/menuService';
import type { Menu } from '../types';

export function useMenus() {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMenus()
      .then(setMenus)
      .catch(() => setError('Erro ao carregar menus'))
      .finally(() => setIsLoading(false));
  }, []);

  return { menus, isLoading, error };
}
