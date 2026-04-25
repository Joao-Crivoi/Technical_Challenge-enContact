interface InitialAvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'w-7 h-7 text-xs',
  md: 'w-9 h-9 text-sm',
  lg: 'w-11 h-11 text-base',
};

export function InitialAvatar({ initials, size = 'sm' }: InitialAvatarProps) {
  return (
    <div
      className={`${sizes[size]} rounded-full bg-brand/20 text-brand font-semibold flex items-center justify-center shrink-0`}
    >
      {initials}
    </div>
  );
}
