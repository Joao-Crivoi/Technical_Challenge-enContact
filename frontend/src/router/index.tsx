import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute, LoginPage } from '@/modules/auth';
import { MainPage } from '@/modules/mail';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
