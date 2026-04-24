import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute, LoginPage } from '@/modules/auth';

const MainPage = () => <div>Main</div>;

export function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}
