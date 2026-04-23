import { useTranslation } from 'react-i18next';

export default function InstitutionalLinks() {
  const { t } = useTranslation();

  return (
    <nav aria-label={t('institutional.navLabel')}>
      <ul>
        <li>
          <a
            href="https://www.encontact.com.br/agende-uma-demonstracao/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('institutional.schedule')}
          </a>
        </li>
        <li>
          <a
            href="https://www.encontact.com.br/sobre-nos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('institutional.about')}
          </a>
        </li>
      </ul>
    </nav>
  );
}
