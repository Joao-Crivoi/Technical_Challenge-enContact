import { Header } from '@/components/ui';
import { Footer } from '@/components/ui';
import { Sidebar } from './sidebar';
import { Toolbar } from './toolbar';
import { ItemList } from './items';
import { useItems } from '../hooks';
import { useItemStore } from '../stores';

export function MainPage() {
  const { visibleItems, isLoading, error, selectedSubMenu, archiveSelected } =
    useItems();
  const { selectedIds } = useItemStore();

  function handleArchive() {
    archiveSelected(selectedIds);
  }

  return (
    <div className="flex flex-col h-screen bg-surface">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex flex-col flex-1 overflow-hidden">
          <Toolbar onArchive={handleArchive} />
          <ItemList
            visibleItems={visibleItems}
            isLoading={isLoading}
            error={error}
            selectedSubMenu={selectedSubMenu}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}
