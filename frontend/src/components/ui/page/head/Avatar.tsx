import { useTranslation } from 'react-i18next';
import { useAvatarMenu } from '@/hooks';
import { Button } from '@/components/ui';

interface AvatarProps {
  initials?: string;
}

export function Avatar({ initials = 'AD' }: AvatarProps) {
  const { t } = useTranslation();
  const { isOpen, setIsOpen, handleLogout, ref } = useAvatarMenu();

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Menu do usuário"
        className="relative w-10 h-10 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white font-semibold text-sm">
          {initials}
        </div>
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-surface" />
      </button>

      {isOpen && (
        <div className="absolute left-full top-0 ml-2 w-36 bg-surface-elevated rounded-xl shadow-lg border border-text-secondary/10 overflow-hidden z-50">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full text-sm text-left justify-start rounded-none"
          >
            {t('nav.logout')}
          </Button>
        </div>
      )}
    </div>
  );
}
