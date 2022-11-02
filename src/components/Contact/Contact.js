import './Contact.css';

import { BsWhatsapp, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

export function Contact() {
  return (
    <div className='Contact'>
      <ul>
        <li>
          <a
            href='https://github.com/idanmoosh'
            target='_blank'
            rel='noreferrer'>
            <BsGithub /> GitHub
          </a>
        </li>
        <li>
          <a href='https://wa.me/972506794083' target='_blank' rel='noreferrer'>
            <BsWhatsapp /> WhatsApp
          </a>
        </li>
        <li>
          <a href='mailto:idanmoosh@gmail.com' target='_blank' rel='noreferrer'>
            <SiGmail /> Gmail
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/idan-haim-025a23a9'
            target='_blank'
            rel='noreferrer'>
            <BsLinkedin /> LinkedIn
          </a>
        </li>
        <li>
          <a
            href='https://www.instagram.com/idanmoosh/'
            target='_blank'
            rel='noreferrer'>
            <BsInstagram /> Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}
