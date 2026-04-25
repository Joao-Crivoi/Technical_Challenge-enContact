import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/router';
import { useThemeEffect } from '@/hooks';

export function App() {
  useThemeEffect();
  return (
    <BrowserRouter basename="/Technical_Challenge-enContact/">
      <AppRoutes />
    </BrowserRouter>
  );
}
