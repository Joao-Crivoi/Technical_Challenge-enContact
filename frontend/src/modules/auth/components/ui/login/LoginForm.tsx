import { useTranslation } from 'react-i18next';
import { useLoginForm } from '@/modules/auth';
import logo from '@/assets/logo/logo_icon.svg';
import { FormField, Input, Button, ErrorAlert } from '@/components/ui';

export function LoginForm() {
  const { t } = useTranslation();
  const { register, handleSubmit, onSubmit, errors, hasError, setHasError } =
    useLoginForm();

  return (
    <section className="w-full max-w-md flex flex-col gap-8">
      <div className="flex lg:hidden absolute left-10 bottom-0 -translate-x-1/2 w-64 h-32 overflow-hidden  opacity-80 pointer-events-none">
        <img src={logo} alt="" aria-hidden="true" className="w-64 h-64" />
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="login-title">{t('login.title')}</h2>
        <p className="login-subtitle">{t('login.subtitle')}</p>
      </div>
      {hasError && <ErrorAlert message={t('login.error')} />}
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <FormField
          id="username"
          label={t('login.username')}
          error={errors.username?.message}
        >
          <Input
            {...register('username', { onChange: () => setHasError(false) })}
            id="username"
          />
        </FormField>
        <FormField
          id="password"
          label={t('login.password')}
          error={errors.password?.message}
        >
          <Input
            {...register('password', { onChange: () => setHasError(false) })}
            id="password"
            type="password"
          />
        </FormField>
        <Button type="submit" className="w-full">
          {t('login.submit')}
        </Button>
      </form>
    </section>
  );
}
