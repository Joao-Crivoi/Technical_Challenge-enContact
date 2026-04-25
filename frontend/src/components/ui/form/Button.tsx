import { type ButtonProps } from './types';

const variants = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  danger: 'btn-danger',
};

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button className={`btn ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
