export function ErrorAlert({ message }: { message: string }) {
  return (
    <span className="text-sm text-error bg-error-surface p-3 rounded-lg">
      {message}
    </span>
  );
}
