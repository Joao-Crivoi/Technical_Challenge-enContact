import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <nav aria-label="Redes sociais">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/company/encontactbr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn da enContact"
          >
            <FaLinkedin size={20} />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/encontactbr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da enContact"
          >
            <FaInstagram size={20} />
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/channel/UCFvzNHa2V6B6AC3nrr1sriw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube da enContact"
          >
            <FaYoutube size={20} />
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/aencontactbr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da enContact"
          >
            <FaFacebook size={20} />
          </a>
        </li>

        <li>
          <a
            href="https://api.whatsapp.com/send/?phone=551151997909&text=Ol%C3%A1%21+Vim+pelo+site+e+quero+saber+mais+da+ferramenta+enContact+na+https%3A%2F%2Fwww.encontact.com.br.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp da enContact"
          >
            <FaWhatsapp size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
