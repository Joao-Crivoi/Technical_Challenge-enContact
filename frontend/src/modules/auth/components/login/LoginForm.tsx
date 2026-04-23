import { useTranslation } from 'react-i18next';

export function LoginForm() {
  const { t } = useTranslation();
  return (
    <section>
      <h2>Login</h2>
      <form>
        <label htmlFor="username">{t('login.username')}</label>
        <input id="username" type="text" />

        <label htmlFor="password">{t('login.password')}</label>
        <input id="password" type="password" />

        <button type="submit">{t('login.submit')}</button>
      </form>
    </section>
  );
}
