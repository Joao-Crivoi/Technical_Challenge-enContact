import { useItemStore } from '../../stores/itemStore';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui';

interface ToolbarProps {
  onArchive: () => void;
}

export function Toolbar({ onArchive }: ToolbarProps) {
  const { t } = useTranslation();
  const { selectedIds, clearSelection } = useItemStore();
  const count = selectedIds.size;

  function handleArchive() {
    onArchive();
    clearSelection();
  }

  return (
    <div className="flex items-center gap-4 px-4 py-2 border-b border-text-secondary/10 bg-surface-elevated min-h-12">
      {count > 0 && (
        <>
          <span className="text-sm text-text-secondary">
            {count} {count === 1 ? 'item selecionado' : 'itens selecionados'}
          </span>
          <Button
            variant="danger"
            onClick={handleArchive}
            className="text-sm py-1"
          >
            {t('toolbar.archive')}
          </Button>
        </>
      )}
    </div>
  );
}
