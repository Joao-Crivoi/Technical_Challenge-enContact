import { useRef, useState } from 'react';
import { useMenus } from '../../hooks/useMenu';
import { MenuItem } from '../items/MenuItem';
import { useTranslation } from 'react-i18next';
import { useSidebarStore } from '../../stores/sidebarStore';

export function Sidebar() {
  const { menus, isLoading, error } = useMenus();
  const { t } = useTranslation();
  const { isOpen, close } = useSidebarStore();
  const [width, setWidth] = useState(256);
  const isResizing = useRef(false);

  function startResize() {
    isResizing.current = true;
    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', stopResize);
  }

  function handleResize(e: MouseEvent) {
    if (!isResizing.current) return;
    setWidth(Math.min(Math.max(e.clientX, 160), 480));
  }

  function stopResize() {
    isResizing.current = false;
    document.removeEventListener('mousemove', handleResize);
    document.removeEventListener('mouseup', stopResize);
  }

  return (
    <>
      {isOpen && (
        <div
          onClick={close}
          aria-hidden="true"
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
        />
      )}

      <aside
        style={{ width: `${width}px` }}
        className={`
    fixed lg:relative top-0 left-0 z-30 lg:z-auto
    h-full bg-surface-elevated border-r border-text-secondary/10
    flex flex-col overflow-y-auto shrink-0
    transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  `}
      >
        {isLoading && (
          <p className="text-text-secondary text-sm p-4">{t('menu.loading')}</p>
        )}
        {error && <p className="text-error text-sm p-4">{t('menu.error')}</p>}

        <ul className="flex flex-col gap-1 p-3">
          {menus.map((menu) => (
            <MenuItem key={menu.id} menu={menu} />
          ))}
        </ul>

        <div
          onMouseDown={startResize}
          className="hidden lg:block absolute top-0 right-0 w-3 h-full cursor-col-resize group z-10"
        >
          <div className="absolute top-0 right-1 w-0.5 h-full bg-primary-200 group-hover:bg-brand transition-colors duration-200" />
        </div>
      </aside>
    </>
  );
}
