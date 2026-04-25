import { Skeleton } from '@/components/ui';

export function ItemCardSkeleton() {
  return (
    <li className="flex items-center gap-4 px-4 py-3 border-b border-text-secondary/10">
      <Skeleton className="w-9 h-9 rounded-full shrink-0" />
      <div className="flex flex-col flex-1 gap-2">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-3 w-48" />
      </div>
      <div className="flex gap-1">
        <Skeleton className="w-7 h-7 rounded-full" />
        <Skeleton className="w-7 h-7 rounded-full" />
      </div>
    </li>
  );
}
