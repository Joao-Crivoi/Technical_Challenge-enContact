export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div
      className={`animate-pulse bg-text-secondary/10 rounded-lg ${className}`}
    />
  );
}
