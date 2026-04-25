import { useTranslation } from 'react-i18next';
import { useMenus } from '../../hooks/useMenu';
import { MenuItem } from '../items/MenuItem';

export function Sidebar() {
  const { menus, isLoading, error } = useMenus();
  const { t } = useTranslation();
  return (
    <aside className="h-full bg-surface-elevated border-r border-text-secondary/10 flex flex-col overflow-y-auto   sidebar">
      {isLoading && (
        <p className="text-text-secondary text-sm p-4">{t('menu.loading')}</p>
      )}
      {error && <p className="text-error text-sm p-4">{t('menu.error')}</p>}
      <ul className="flex flex-col gap-1 p-3">
        {menus.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </aside>
  );
}
