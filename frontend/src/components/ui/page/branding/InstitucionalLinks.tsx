import { useTranslation } from 'react-i18next';
import { INSTITUTIONAL_LINKS } from '@/constants';
import { LinkButton } from '../navigation';

export function InstitutionalLinks() {
  const { t } = useTranslation();
  return (
    <nav aria-label={t('institutional.navLabel')}>
      <ul className="flex gap-3">
        {INSTITUTIONAL_LINKS.map(({ href, key }) => (
          <li key={key}>
            <LinkButton href={href} target="_blank" rel="noopener noreferrer">
              {t(`institutional.${key}`)}
            </LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
