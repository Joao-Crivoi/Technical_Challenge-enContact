import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

interface IconLinkProps extends ComponentPropsWithoutRef<'a'> {
  icon: ReactNode;
  label: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'icon-link-sm',
  md: 'icon-link-md',
  lg: 'icon-link-lg',
};

export function IconLink({
  icon,
  label,
  size = 'md',
  className = '',
  ...props
}: IconLinkProps) {
  return (
    <a
      aria-label={label}
      className={`icon-link ${sizes[size]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {icon}
    </a>
  );
}
