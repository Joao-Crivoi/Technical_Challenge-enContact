import { useState, useEffect } from 'react';
import { fetchItems } from '../services/itemService';
import { useMenuStore } from '../stores/menuStore';
import type { SubMenuItem } from '../types';

export function useItems() {
  const { selectedSubMenu } = useMenuStore();
  const [items, setItems] = useState<SubMenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [archivedIds, setArchivedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (!selectedSubMenu) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    setError(null);
    fetchItems(selectedSubMenu.id)
      .then((data) => setItems(data.subMenuItems))
      .catch(() => setError('Erro ao carregar items'))
      .finally(() => setIsLoading(false));
  }, [selectedSubMenu]);

  const visibleItems = items.filter((item) => !archivedIds.has(item.id));

  function archiveSelected(ids: Set<string>) {
    setArchivedIds((prev) => new Set([...prev, ...ids]));
  }

  return { visibleItems, isLoading, error, selectedSubMenu, archiveSelected };
}
