import { Navigate } from 'react-router-dom';
import { type ReactNode } from 'react';
import { useAuthStore } from '../stores/authStore';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
