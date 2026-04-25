import logo from '@/assets/logo/logo_icon.svg';

interface CutLogoProps {
  className?: string;
}

export function CutLogo({ className = '' }: CutLogoProps) {
  return (
    <div
      className={`overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <img src={logo} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
