import { SocialLinks } from '@/components/ui';
import { Blob } from '@/components/ui';
import logo from '@/assets/logo/logo_large.svg';

export function Footer() {
  return (
    <footer className="relative flex flex-col md:flex-row items-center justify-between gap-2 px-6 py-3 animated-gradient overflow-hidden">
      <Blob />

      <img
        src={logo}
        alt="enContact logo"
        width={100}
        height={25}
        loading="lazy"
        className="relative z-10 shrink-0"
      />

      <div className="relative z-10">
        <SocialLinks />
      </div>

      <p className="relative z-10 text-white text-xs text-center shrink-0">
        © 2025 Dev:{' '}
        <a
          href="https://www.linkedin.com/in/joao-crivoi-souza"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de João Victor"
          className="underline hover:text-white/80 whitespace-nowrap"
        >
          João Souza
        </a>
      </p>
    </footer>
  );
}
