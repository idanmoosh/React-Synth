import './aboutStyles.css';
import { Contact } from '../Contact/Contact';

export const About = () => {
  return (
    <div>
      <h2>about</h2>
      <p>
        {' '}
        this instrument built by <span>Idan Haim</span> feel free to contact me:
      </p>
      <Contact />
    </div>
  );
};
