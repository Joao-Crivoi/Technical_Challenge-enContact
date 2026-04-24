import { type ComponentPropsWithoutRef } from 'react';

interface LinkButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: 'outline' | 'solid';
}

const variants = {
  outline: 'border-2 border-white text-white hover:bg-white hover:text-brand',
  solid:
    'bg-white text-brand hover:bg-brand hover:text-white hover:border-white border-2 border-transparent',
};

export function LinkButton({
  variant = 'outline',
  className = '',
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={`inline-block px-4 py-2 rounded-lg font-medium transition-all duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
