import { Controls } from './control';
import { Avatar } from './Avatar';
import { Blob, CutLogo } from '@/components/ui';

export function Header() {
  return (
    <header className="relative h-16 flex items-center justify-between px-6 animated-gradient overflow-hidden">
      <Blob />
      <div className="relative z-10">
        <Avatar initials="AD" />
      </div>
      <div
        className="absolute left-1/2 -translate-x-1/2 overflow-hidden w-12 h-12 pointer-events-none z-0"
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
