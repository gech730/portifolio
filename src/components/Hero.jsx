import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import photo from '../assets/image.png';
import '../styles/hero.css';

const LINES = [
  'Full Stack Developer (MERN)',
  'AI Enthusiast',
  'Problem Solver',
  'Open Source Contributor',
];

const Hero = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);

  /* ── Typing animation ── */
  useEffect(() => {
    const current = LINES[lineIndex];
    let timeout;
    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLineIndex((prev) => (prev + 1) % LINES.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1));
      }, isDeleting ? 35 : 65);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, lineIndex]);

  /* ── Scroll progress bar ── */
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <section id="home" className="hero" ref={heroRef}>
        {/* Ambient background blobs */}
        <div className="hero-blob hero-blob-1" aria-hidden="true" />
        <div className="hero-blob hero-blob-2" aria-hidden="true" />

        <div className="hero-inner">
          {/* ── Top: circular profile image ── */}
          <div className="hero-photo-wrapper animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Rotating gradient ring */}
            <div className="photo-ring-outer" aria-hidden="true" />
            <div className="photo-ring-inner" aria-hidden="true" />
            {/* Floating dots */}
            <span className="photo-dot photo-dot-1" aria-hidden="true" />
            <span className="photo-dot photo-dot-2" aria-hidden="true" />
            <span className="photo-dot photo-dot-3" aria-hidden="true" />
            {/* The image */}
            <div className="hero-photo-frame">
              <img
                src={photo}
                alt="Getacher Kifilie — Full Stack Developer"
                className="hero-photo-img"
                loading="eager"
              />
            </div>
          </div>

          {/* ── Bottom: text ── */}
          <div className="hero-text">
            <span className="hero-greeting animate-fade-in-up">
              👋 Welcome to my portfolio
            </span>

            <h1 className="hero-name animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              Getacher<br />
              <span className="hero-name-accent">Kifilie</span>
            </h1>

            <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <span className="typing-text">{displayText}</span>
              <span className="typing-cursor" aria-hidden="true">|</span>
            </p>

            <p className="hero-intro animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              I build exceptional digital experiences with modern technologies.
              Passionate about creating innovative solutions and exploring the frontiers of AI.
            </p>

            <div className="hero-buttons animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button className="btn btn-secondary" onClick={() => scrollTo('#projects')}>
                View Projects
              </button>
              <button className="btn btn-primary" onClick={() => scrollTo('#contact')}>
                Contact Me
              </button>
            </div>

            <div className="hero-social animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
              <a href="https://github.com/gech730" target="_blank" rel="noopener noreferrer"
                aria-label="GitHub" className="hero-social-link">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/getacher-kifilie-2a33a9362/" target="_blank"
                rel="noopener noreferrer" aria-label="LinkedIn" className="hero-social-link">
                <Linkedin size={20} />
              </a>
              <a href="mailto:getacherkifilie23@gmail.com" aria-label="Email" className="hero-social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <button
          className="scroll-indicator animate-fade-in"
          style={{ animationDelay: '1.2s' }}
          onClick={() => scrollTo('#about')}
          aria-label="Scroll to About section"
        >
          <ArrowDown size={20} />
        </button>
      </section>
    </>
  );
};

export default Hero;
