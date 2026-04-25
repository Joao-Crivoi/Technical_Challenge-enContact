import { type FormFieldProps } from './types';

export function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-text-secondary">
        {label}
      </label>
      {children}
      {error && <span className="text-xs text-error">{error}</span>}
    </div>
  );
}
