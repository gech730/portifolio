import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/gech730', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/getacher-kifilie-2a33a9362/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:getacherkifilie23@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-social">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="footer-divider"></div>

        <p className="footer-copyright">
          Designed &amp; Built by Getacher Kifilie
        </p>
        <p className="footer-email">
          <a href="mailto:getacherkifilie23@gmail.com">getacherkifilie23@gmail.com</a>
        </p>
        <p className="footer-year">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

        <button 
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
