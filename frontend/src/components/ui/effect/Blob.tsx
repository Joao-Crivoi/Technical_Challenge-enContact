export function Blob() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-80 h-80 bg-amber-700/45 blob"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-15 -right-15 w-md h-112 bg-white/10 blob"
        style={{ animationDelay: '3s' }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/3 w-56 h-56 bg-white/8 blob"
        style={{ animationDelay: '1.5s' }}
      />
    </>
  );
}
