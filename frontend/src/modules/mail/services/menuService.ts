import type { Menu } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchMenus(): Promise<Menu[]> {
  const response = await fetch(`${BASE_URL}/menus`);
  if (!response.ok) throw new Error('Erro ao buscar menus');
  return response.json();
}
