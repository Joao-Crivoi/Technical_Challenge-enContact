import InstitutionalLinks from '@/components/ui/InstitucionalLinks';
import SocialLinks from '@/components/ui/SocialLinks';
import logo from '@/assets/logo_large.svg';
import { useTranslation } from 'react-i18next';

export function LoginBranding() {
  const { t } = useTranslation();
  return (
    <section>
      <img
        src={logo}
        alt="enContact - logotipo"
        width={160}
        height={40}
        loading="lazy"
      />
      <h1>{t('branding.tagline')}</h1>
      <p>{t('branding.description')}</p>

      <SocialLinks />
      <InstitutionalLinks />
    </section>
  );
}
