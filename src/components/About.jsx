import { useEffect, useRef } from 'react';
import { GraduationCap, Heart, Target } from 'lucide-react';
import '../styles/about.css';
import photo from '../assets/myphoto.jpg';
const About = () => {
  const infoCards = [
    {
      icon: <GraduationCap size={28} />,
      title: 'Education',
      content: 'Bachelor of Technology in Computer Science. Focused on software engineering, algorithms, and emerging technologies.',
    },
    {
      icon: <Heart size={28} />,
      title: 'Interests',
      content: 'Passionate about web development, artificial intelligence, machine learning, and building innovative solutions.',
    },
    {
      icon: <Target size={28} />,
      title: 'Goals',
      content: 'To become a full-stack developer, contribute to open-source projects, and explore the frontiers of AI.',
    },
  ];

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-image-wrapper animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="about-image">
              <div className="image-placeholder">
                <span><img src={photo} alt="" /></span>
              </div>
              <div className="image-border"></div>
            </div>
          </div>

          <div className="about-text animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <p>
              I'm a Computer Science student and MERN Stack Developer with a keen interest in 
              <span className="highlight"> Artificial Intelligence</span>. I love building web applications 
              that are not only functional but also provide great user experiences.
            </p>
            <p>
              My journey in programming started with curiosity about how things work, and now I 
              specialize in creating full-stack applications using MongoDB, Express.js, React, and Node.js.
              I'm constantly learning and exploring new technologies, particularly in the AI space.
            </p>
            <p>
              When I'm not coding, you can find me reading about the latest advancements in AI, 
              contributing to open-source projects, or working on personal side projects.
            </p>
          </div>
        </div>

        <div className="about-cards">
          {infoCards.map((card, index) => (
            <div
              key={card.title}
              className="about-card animate-on-scroll"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="card-icon">{card.icon}</div>
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
