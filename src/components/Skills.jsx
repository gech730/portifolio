import { useEffect, useRef } from 'react';
import '../styles/skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
      ],
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 70 },
      ],
    },
    {
      category: 'Other',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'REST API', level: 75 },
      ],
    },
  ];

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

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Skills</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={category.category} 
              className="skill-category animate-on-scroll"
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="skill-item"
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ 
                          '--target-width': `${skill.level}%`,
                          animationDelay: `${catIndex * 0.2 + skillIndex * 0.1 + 0.3}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack animate-on-scroll" style={{ animationDelay: '0.5s' }}>
          <h3 className="tech-title">Technologies I Work With</h3>
          <div className="tech-tags">
            {[
              'JavaScript', 'React', 'Node.js', 'Express', 
              'MongoDB', 'HTML5', 'CSS3', 'Git', 'REST APIs',
              'VS Code', 'GitHub', 'Figma'
            ].map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
