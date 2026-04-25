import { ItemCard } from './ItemCard';
import type { SubMenuItem } from '../../types';
import { ItemCardSkeleton } from './ItemCardSkeleton';
import { useTranslation } from 'react-i18next';

interface ItemListProps {
  visibleItems: SubMenuItem[];
  isLoading: boolean;
  error: string | null;
  selectedSubMenu: { id: number; name: string } | null;
}

export function ItemList({
  visibleItems,
  isLoading,
  error,
  selectedSubMenu,
}: ItemListProps) {
  const { t } = useTranslation();

  if (!selectedSubMenu) {
    return (
      <div className="flex flex-1 items-center justify-center text-text-secondary text-sm">
        {t('menu.select')}
      </div>
    );
  }
  if (isLoading) {
    return (
      <ul className="flex flex-col overflow-y-auto flex-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <ItemCardSkeleton key={i} />
        ))}
      </ul>
    );
  }
  if (error) {
    return (
      <div className="flex flex-1 items-center justify-center text-error text-sm">
        {error}
      </div>
    );
  }
  return (
    <ul className="flex flex-col overflow-y-auto flex-1">
      {visibleItems.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </ul>
  );
}
