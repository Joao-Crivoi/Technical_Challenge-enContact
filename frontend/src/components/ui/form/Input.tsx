import { type InputProps } from './types';

export function Input({ type = 'text', className = '', ...props }: InputProps) {
  return (
    <input
      type={type}
      className={`w-full px-4 py-2 rounded-lg border-2 border-text-secondary/20 
                 bg-surface-subtle text-black outline-none transition-all duration-200 
                 focus:border-brand ${className}`}
      {...props}
    />
  );
}
