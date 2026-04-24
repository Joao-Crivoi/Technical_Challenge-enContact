import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type InputProps = ComponentPropsWithoutRef<'input'>;

export interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

export type ButtonVariant = 'primary' | 'danger' | 'ghost';
export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
}
