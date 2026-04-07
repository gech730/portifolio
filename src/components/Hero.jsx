import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Briefcase } from 'lucide-react';
import '../styles/hero.css';

const LINES = ["Hi, I'm Getacher", "AI Enthusiast | Full Stack Developer"];

const Hero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = LINES[lineIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      // Pause at end before deleting (don't delete the last line)
      if (lineIndex === LINES.length - 1) return;
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % LINES.length);
    } else {
      const speed = isDeleting ? 40 : 70;
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, lineIndex]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-greeting animate-fade-in-up">
          Welcome to my portfolio
        </span>

        <h1 className="hero-name animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Getacher Kifilie
        </h1>

        <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {displayText}
          <span className="typing-cursor">|</span>
        </p>

        <p className="hero-intro animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          I build exceptional digital experiences with modern technologies. 
          Passionate about creating innovative solutions and exploring the frontiers of AI.
        </p>

        <div className="hero-open-to-work animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
          <Briefcase size={14} />
          Available for full-time roles &amp; freelance projects
        </div>

        <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a 
            href="#projects" 
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, '#projects')}
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="btn btn-secondary"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact Me
          </a>
        </div>

        <div className="hero-social animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a href="https://github.com/gech730" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/getacher-kifilie-2a33a9362/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:getacherkifilie23@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="scroll-indicator animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
