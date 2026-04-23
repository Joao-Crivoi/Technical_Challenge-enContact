import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './modules/auth/components/ProtectedRoute';

const LoginPage = () => <div>Login</div>;
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
