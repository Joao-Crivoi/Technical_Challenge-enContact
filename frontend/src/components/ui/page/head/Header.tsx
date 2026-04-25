import { Menu } from 'lucide-react';
import { Controls } from './control';
import { Avatar } from './Avatar';
import { Blob, CutLogo } from '@/components/ui';
import { useSidebarStore } from '@/modules/mail';

export function Header() {
  const { toggle } = useSidebarStore();

  return (
    <header className="relative h-16 flex items-center justify-between px-6 animated-gradient overflow-hidden">
      <Blob />
      <div className="relative z-10 flex items-center gap-3">
        <button
          onClick={toggle}
          aria-label="Abrir menu"
          className="lg:hidden text-white hover:text-white/80 transition-colors"
        >
          <Menu size={22} />
        </button>
        <Avatar initials="AD" />
      </div>

      <div
        className="absolute left-1/2 -translate-x-1/2 z-0 overflow-hidden w-12 h-12 pointer-events-none"
        aria-hidden="true"
      >
        <CutLogo className="w-12 h-12" />
      </div>

      <div className="relative z-10">
        <Controls />
      </div>
    </header>
  );
}
