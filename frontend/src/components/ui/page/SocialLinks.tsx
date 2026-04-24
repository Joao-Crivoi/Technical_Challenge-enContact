import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';

export function SocialLinks() {
  return (
    <nav aria-label="Redes sociais">
      <ul className="flex gap-4">
        <li>
          <a
            href="https://www.linkedin.com/company/encontactbr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn da enContact"
            className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 block"
          >
            <FaLinkedin size={28} />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/encontactbr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da enContact"
            className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 block"
          >
            <FaInstagram size={28} />
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/channel/UCFvzNHa2V6B6AC3nrr1sriw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube da enContact"
            className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 block"
          >
            <FaYoutube size={28} />
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/aencontactbr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da enContact"
            className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 block"
          >
            <FaFacebook size={28} />
          </a>
        </li>

        <li>
          <a
            href="https://api.whatsapp.com/send/?phone=551151997909&text=Ol%C3%A1%21+Vim+pelo+site+e+quero+saber+mais+da+ferramenta+enContact+na+https%3A%2F%2Fwww.encontact.com.br.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da enContact"
            className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 block"
          >
            <FaWhatsapp size={28} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
