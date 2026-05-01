import { useRef } from 'react';
import { GraduationCap, Heart, Target } from 'lucide-react';
import '../styles/about.css';
import photo from '../assets/myphoto.jpg';

const About = () => {
  const ref = useRef(null);

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

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          {/* ── Photo ── */}
          <div className="about-image-wrapper fade-in-up">
            <div className="photo-frame-container">
              {/* The photo */}
              <div className="dev-photo">
                <img src={photo} alt="Getacher Kifilie" />
              </div>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="about-text fade-in-up">
            <p>
              I'm a Computer Science student and MERN Stack Developer with a keen interest in
              <span className="highlight"> Artificial Intelligence</span>. I love building web applications
              that are not only functional but also provide great user experiences.
            </p>
            <p>
              My journey in programming started with curiosity about how things work, and now I
              am working in creating full-stack applications using MongoDB, Express.js, React, and Node.js.
              I'm constantly learning and exploring new technologies, particularly in the AI space.
            </p>
            <p>
              When I'm not coding, you can find me reading about the latest advancements in AI,
              contributing to open-source projects, or working on personal side projects.
            </p>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="about-cards">
          {infoCards.map((card, index) => (
            <div
              key={card.title}
              className="about-card fade-in-up"
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
