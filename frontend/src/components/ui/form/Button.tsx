import { type ButtonProps } from './types';

const variants = {
  primary: 'bg-brand text-white hover:bg-brand/90 active:scale-95',
  outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
  ghost: 'text-brand hover:bg-brand/10',
  danger: 'bg-red-500 text-white hover:bg-red-600 active:scale-95',
};

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
