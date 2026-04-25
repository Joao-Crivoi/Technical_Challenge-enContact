import type { MenuItems } from '../types';

const BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchItems(subMenuId: number): Promise<MenuItems> {
  const response = await fetch(`${BASE_URL}/items/${subMenuId}`);
  if (!response.ok) throw new Error('Erro ao buscar items');
  return response.json();
}
