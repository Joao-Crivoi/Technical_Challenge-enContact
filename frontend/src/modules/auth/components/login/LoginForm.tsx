import { useTranslation } from 'react-i18next';
import { useLoginForm } from '@/modules/auth';
import logo from '@/assets/logo/logo_large.svg';
import { FormField, Input, Button, ErrorAlert } from '@/components/ui';

export function LoginForm() {
  const { t } = useTranslation();
  const { register, handleSubmit, onSubmit, errors, hasError, setHasError } =
    useLoginForm();

  return (
    <section className="w-full max-w-md flex flex-col gap-8">
      <img
        src={logo}
        alt="enContact - logotipo"
        width={160}
        height={40}
        loading="lazy"
        className="flex lg:hidden relative z-10"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-gray-900">{t('login.title')}</h2>
        <p className="text-gray-500">{t('login.subtitle')}</p>
      </div>

      {hasError && <ErrorAlert message={t('login.error')} />}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 p-8 rounded-2xl border-2 border-brand/20 shadow-sm"
      >
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
