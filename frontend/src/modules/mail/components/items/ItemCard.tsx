import { InitialAvatar } from '@/components/ui';
import { useItemCard } from '../../hooks/useItemCard';
import type { SubMenuItem } from '../../types';

interface ItemCardProps {
  item: SubMenuItem;
}

export function ItemCard({ item }: ItemCardProps) {
  const { isSelected, showCheckbox, toggleItem, setIsHovered } = useItemCard(
    item.id,
  );

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center gap-4 px-4 py-3 border-b border-text-secondary/10 transition-colors duration-150 cursor-pointer
        ${isSelected ? 'bg-brand/10' : 'hover:bg-hover-subtle'}`}
    >
      <div className="shrink-0">
        {showCheckbox ? (
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => toggleItem(item.id)}
            className="w-5 h-5 accent-brand cursor-pointer"
            aria-label={`Selecionar ${item.name}`}
          />
        ) : (
          <InitialAvatar initials={item.owner} size="md" />
        )}
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm font-semibold text-text-primary truncate">
          {item.name}
        </span>
        <span className="text-xs text-text-secondary truncate">
          {item.subject}
        </span>
      </div>

      <div className="flex items-center gap-1 shrink-0">
        {item.users.map((user, index) => (
          <InitialAvatar key={index} initials={user} size="sm" />
        ))}
      </div>
    </li>
  );
}
