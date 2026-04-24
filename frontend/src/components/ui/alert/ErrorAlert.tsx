export function ErrorAlert({ message }: { message: string }) {
  return (
    <span className="text-sm text-red-500 bg-red-50 p-3 rounded-lg">
      {message}
    </span>
  );
}
