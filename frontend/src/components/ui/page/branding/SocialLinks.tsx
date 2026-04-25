import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaLink,
} from 'react-icons/fa';
import type { ReactNode } from 'react';

import { SOCIAL_LINKS } from '@/constants';
import { IconLink } from '../navigation';

const defaultLabel = 'Website';
const defaultIcon = <FaLink size={28} />;
const defaultLink = 'https://www.encontact.com.br/';

const icons: Record<string, ReactNode> = {
  linkedin: <FaLinkedin size={28} />,
  instagram: <FaInstagram size={28} />,
  youtube: <FaYoutube size={28} />,
  facebook: <FaFacebook size={28} />,
  whatsapp: <FaWhatsapp size={28} />,
};

export function SocialLinks() {
  return (
    <nav aria-label="Redes sociais">
      <ul className="flex gap-4">
        {SOCIAL_LINKS.map(({ href, label, key }) => (
          <li key={key}>
            <IconLink
              href={href ?? defaultLink}
              icon={icons[key] ?? defaultIcon}
              label={label ?? defaultLabel}
              className="social-link"
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
