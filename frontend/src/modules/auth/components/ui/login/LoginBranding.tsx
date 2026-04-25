import { useTranslation } from 'react-i18next';
import { SocialLinks, Blob, InstitutionalLinks } from '@/components/ui';

import logo from '@/assets/logo/logo_large.svg';

export function LoginBranding() {
  const { t } = useTranslation();
  return (
    <section className="branding-section">
      <img
        src={logo}
        alt="enContact - logotipo"
        width={160}
        height={40}
        loading="lazy"
        className="relative z-10"
      />
      <Blob />
      <div className="flex flex-col gap-6 relative z-10">
        <h1 className="text-4xl font-bold leading-tight">
          {t('branding.tagline')}
        </h1>
        <p className="text-lg opacity-90">{t('branding.description')}</p>
        <InstitutionalLinks />
      </div>
      <div className="relative z-10">
        <SocialLinks />
      </div>
    </section>
  );
}
