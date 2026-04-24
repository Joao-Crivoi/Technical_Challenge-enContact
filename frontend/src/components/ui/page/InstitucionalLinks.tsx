import { useTranslation } from 'react-i18next';
import { LinkButton } from './LinkButton';

export function InstitutionalLinks() {
  const { t } = useTranslation();

  return (
    <nav aria-label={t('institutional.navLabel')}>
      <ul className="flex gap-3">
        <li>
          <LinkButton
            href="https://www.encontact.com.br/agende-uma-demonstracao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('institutional.schedule')}
          </LinkButton>
        </li>
        <li>
          <LinkButton
            href="https://www.encontact.com.br/sobre-nos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('institutional.about')}
          </LinkButton>
        </li>
      </ul>
    </nav>
  );
}
