import { type ComponentPropsWithoutRef } from 'react';

interface LinkButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: 'outline' | 'solid';
}

const variants = {
  outline: 'link-btn-outline',
  solid: 'link-btn-solid',
};

export function LinkButton({
  variant = 'outline',
  className = '',
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a className={`link-btn ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
