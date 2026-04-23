import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState } from '../types/store';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: (username, password) => {
        const isValid =
          username.toLowerCase() === import.meta.env.VITE_MOCK_USER &&
          password.toLowerCase() === import.meta.env.VITE_MOCK_PASS;

        if (isValid) set({ isAuthenticated: true });

        return isValid;
      },
      logout: () => set({ isAuthenticated: false }),
    }),
    { name: 'auth-storage' },
  ),
);
