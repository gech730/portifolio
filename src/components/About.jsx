import { useEffect, useRef } from 'react';
import { GraduationCap, Heart, Target, Code2 } from 'lucide-react';
import '../styles/about.css';
import photo from '../assets/myphoto.jpg';

const infoCards = [
  {
    icon: <GraduationCap size={26} />,
    title: 'Education',
    content: 'BSc. Computer Science student focused on software engineering, algorithms, and emerging technologies.',
  },
  {
    icon: <Heart size={26} />,
    title: 'Interests',
    content: 'Passionate about web development, artificial intelligence, machine learning, and building innovative solutions.',
  },
  {
    icon: <Target size={26} />,
    title: 'Goals',
    content: 'To become a world-class full-stack developer, contribute to open-source, and explore the frontiers of AI.',
  },
  {
    icon: <Code2 size={26} />,
    title: 'Experience',
    content: 'Building full-stack applications with MERN stack, integrating payment APIs, and designing intuitive UIs.',
  },
];

const About = () => {
  const sectionRef = useRef(null);

  /* Scroll-reveal via IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = sectionRef.current?.querySelectorAll('.reveal');
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about-container">

        {/* Header */}
        <div className="section-header reveal">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-line" />
        </div>

        {/* Main content: landscape image + text */}
        <div className="about-content">

          {/* ── Landscape image (left) ── */}
          <div className="about-image-wrapper reveal reveal-left">
            <div className="about-img-frame">
              <img
                src={photo}
                alt="Getacher Kifilie — Full Stack Developer"
                className="about-img"
                loading="lazy"
              />
              {/* Decorative corner accents */}
              <span className="img-corner img-corner-tl" aria-hidden="true" />
              <span className="img-corner img-corner-br" aria-hidden="true" />

            </div>
          </div>

          {/* ── Text (right) ── */}
          <div className="about-text reveal reveal-right">
            <h3 className="about-heading">
              Full Stack Developer &amp; <span className="text-gradient">AI Enthusiast</span>
            </h3>

            <p>
              I'm a Computer Science student and MERN Stack Developer with a keen interest in
              <span className="highlight"> Artificial Intelligence</span>. I love building web
              applications that are not only functional but also provide great user experiences.
            </p>
            <p>
              My journey in programming started with curiosity about how things work, and now I
              create full-stack applications using MongoDB, Express.js, React, and Node.js.
              I'm constantly learning and exploring new technologies, particularly in the AI space.
            </p>
            <p>
              When I'm not coding, you can find me reading about the latest advancements in AI,
              contributing to open-source projects, or working on personal side projects.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Coding</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info cards */}
        <div className="about-cards">
          {infoCards.map((card) => (
            <div key={card.title} className="about-card reveal">
              <div className="card-icon-wrap">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-content">{card.content}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
