import { useCallback } from 'react';

const sleep = (ms: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, ms));

export function useTypewriter<T extends Record<string, unknown>>(
  setValue: (field: keyof T & string, value: string) => void,
  delay = 150,
) {
  const type = useCallback(
    async (field: keyof T & string, text: string) => {
      for (let i = 0; i < text.length; i++) {
        setValue(field, text.slice(0, i + 1));
        await sleep(delay);
      }
    },
    [setValue, delay],
  );

  return { type };
}
