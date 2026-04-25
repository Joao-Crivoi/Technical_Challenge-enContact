import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedRoute, LoginPage } from '@/modules/auth';

const MainPage = () => <div>Main</div>;

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
