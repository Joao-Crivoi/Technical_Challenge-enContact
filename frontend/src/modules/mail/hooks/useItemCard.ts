import { useState } from 'react';
import { useItemStore } from '../stores/itemStore';

export function useItemCard(id: string) {
  const [isHovered, setIsHovered] = useState(false);
  const { selectedIds, toggleItem } = useItemStore();
  const isSelected = selectedIds.has(id);
  const hasAnySelected = selectedIds.size > 0;
  const showCheckbox = isHovered || hasAnySelected;

  return {
    isSelected,
    showCheckbox,
    toggleItem,
    setIsHovered,
  };
}
