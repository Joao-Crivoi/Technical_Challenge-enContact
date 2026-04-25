import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@/modules/auth/stores/authStore';
import {
  type LoginFormData,
  loginSchema,
} from '@/modules/auth/schemas/login/loginSchemas';
import { useTypewriter } from '@/hooks';

export function useLoginForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [hasError, setHasError] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const { type } = useTypewriter<LoginFormData>(setValue);

  useEffect(() => {
    const timer = setTimeout(async () => {
      await type('username', import.meta.env.VITE_MOCK_USER);
      await type('password', import.meta.env.VITE_MOCK_PASS);
    }, 3000);

    return () => clearTimeout(timer);
  }, [type]);

  function onSubmit(data: LoginFormData) {
    const isCredentialsValid = login(data.username, data.password);
    if (!isCredentialsValid) {
      setHasError(true);
      return;
    }
    navigate('/');
  }

  return { register, handleSubmit, onSubmit, errors, hasError, setHasError };
}
