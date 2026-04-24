import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthStore } from '@/modules/auth/stores/authStore';
import {
  type LoginFormData,
  loginSchema,
} from '@/modules/auth/schemas/login/loginSchemas';

export function useLoginForm() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [hasError, setHasError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(data: LoginFormData) {
    const isCredentialsValid = login(data.username, data.password);
    if (!isCredentialsValid) {
      setHasError(true);
      return;
    }
    navigate('/');
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    hasError,
    setHasError,
  };
}
