import { useEffect, useRef } from 'react';
import '../styles/skills.css';

// Real brand icons from devicons CDN — no extra packages needed
const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML',       img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS',        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'React',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Figma',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
      { name: 'PHP',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Java',     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'MongoDB', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL',   img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git',     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'VS Code', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Flutter', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    ],
  },
];

const Skills = () => {
  const sectionRef = useRef(null);

  /* Scroll-reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-container">

        <div className="section-header reveal">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <div className="section-line" />
        </div>

        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <div key={group.label} className="skill-group reveal" style={{ transitionDelay: `${gi * 0.1}s` }}>
              <h3 className="skill-group-label">{group.label}</h3>
              <div className="skill-cards">
                {group.skills.map((skill, si) => (
                  <div
                    key={skill.name}
                    className="skill-card"
                    style={{ animationDelay: `${si * 0.05}s` }}
                    title={skill.name}
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="skill-icon-img"
                      loading="lazy"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span className="skill-card-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
