import type { Menu } from '../../types';
import { useMenuStore } from '../../stores/menuStore';
import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { useSidebarStore } from '../../stores';

interface MenuItemProps {
  menu: Menu;
}

export function MenuItem({ menu }: MenuItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedSubMenu, setSelectedSubMenu } = useMenuStore();
  const { close } = useSidebarStore();
  return (
    <li>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-text-primary hover:bg-brand/10 transition-colors duration-200 rounded-lg"
      >
        {menu.name}
        {isOpen ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
      </button>

      {isOpen && (
        <ul className="ml-4 flex flex-col gap-1 mt-1">
          {menu.subMenus.map((sub) => (
            <li key={sub.id}>
              <button
                onClick={() => {
                  setSelectedSubMenu(sub);
                  close();
                }}
                className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors duration-200
                  ${
                    selectedSubMenu?.id === sub.id
                      ? 'bg-brand text-white'
                      : 'text-text-secondary hover:bg-brand/10 hover:text-text-primary'
                  }`}
              >
                {sub.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
