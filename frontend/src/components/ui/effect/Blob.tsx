export function Blob() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 blob"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-15 -right-15 w-96 h-96 bg-white/10 blob"
        style={{ animationDelay: '3s' }}
      />

      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 blob"
        style={{ animationDelay: '1.5s' }}
      />
    </>
  );
}
