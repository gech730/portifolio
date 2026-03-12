import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import '../styles/hero.css';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Computer Science Student | MERN Stack Developer | AI Enthusiast";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <span className="hero-greeting animate-fade-in-up">
          Hello, I'm
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
