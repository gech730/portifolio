import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/skills.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay, ease: 'easeOut' } },
});

// SVG icon paths — inline so no extra deps needed
const icons = {
  HTML:       { svg: 'M4 3h16l-1.5 15L12 21l-6.5-3L4 3z', color: '#e34f26' },
  CSS:        { svg: 'M4 3h16l-1.5 15L12 21l-6.5-3L4 3z', color: '#1572b6' },
  JavaScript: { svg: 'M3 3h18v18H3V3zm9.5 13c.28.56.81 1 1.5 1 .75 0 1.25-.37 1.25-1.12 0-.69-.44-.94-1.19-1.28l-.41-.17c-1.19-.5-1.97-1.13-1.97-2.47 0-1.22.94-2.16 2.41-2.16.97 0 1.69.34 2.19 1.22l-1.19.75c-.25-.44-.53-.62-.97-.62-.44 0-.72.28-.72.62 0 .44.28.62.94.91l.41.17c1.41.59 2.19 1.19 2.19 2.56 0 1.47-1.16 2.28-2.72 2.28-1.53 0-2.5-.75-2.97-1.72L12.5 16zm-5.5 0c.28.56.69.97 1.25.97.56 0 .91-.22.91-.97V10h1.5v6.03c0 1.59-.94 2.31-2.31 2.31-1.22 0-1.94-.63-2.31-1.41L7 16z', color: '#f7df1e' },
  React:      { svg: 'M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', color: '#61dafb' },
  'Node.js':  { svg: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.5v7L12 19.82 4 15.5v-7L12 4.18z', color: '#339933' },
  'Express':  { svg: 'M3 6h18M3 12h18M3 18h18', color: '#888' },
  MongoDB:    { svg: 'M12 2C8 2 5 8 5 12c0 3.5 2 6.5 5 7.5V22h4v-2.5c3-1 5-4 5-7.5 0-4-3-10-7-10z', color: '#47a248' },
  Git:        { svg: 'M15 3l3.3 3.3-2.4 2.4L13.5 6 9 10.5l1.8 1.8L9 14.1l-1.8-1.8L3 18l3 3 4.2-4.2-1.8-1.8 1.8-1.8 4.5-4.5 2.4 2.4L21 9l-3-3-3 3z', color: '#f05032' },
  'REST API': { svg: 'M4 6h16M4 12h16M4 18h7', color: '#64ffda' },
  Figma:      { svg: 'M8 2h8a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8zm0 8a4 4 0 0 1 0 8 4 4 0 0 1 0-8zm8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM8 18a4 4 0 1 1 8 0', color: '#a259ff' },
  Flutter:    { svg: 'M13 2L3 12l4 4 2-2 8-8-4-4zm-2 14l-4 4 4 4 8-8-4-4-4 4z', color: '#54c5f8' },
  GitHub:     { svg: 'M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z', color: '#fff' },
  'VS Code':  { svg: 'M17 2L7 12l10 10 4-2V4l-4-2zM7 12L3 9.5v5L7 12z', color: '#007acc' },
};

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma'],
  },
  {
    label: 'Backend & Database',
    skills: ['Node.js', 'Express', 'MongoDB', 'REST API'],
  },
  {
    label: 'Tools & Other',
    skills: ['Git', 'GitHub', 'VS Code', 'Flutter'],
  },
];

const SkillIcon = ({ name }) => {
  const icon = icons[name] || { svg: 'M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z', color: '#64ffda' };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={icon.color} strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" className="skill-svg" aria-hidden="true">
      <path d={icon.svg} />
    </svg>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="skills-container">
        <motion.div
          className="section-header"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="section-title">Skills</h2>
          <div className="section-line" />
        </motion.div>

        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              className="skill-group"
              variants={fadeUp(0.1 + gi * 0.1)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <h3 className="skill-group-label">{group.label}</h3>
              <div className="skill-cards">
                {group.skills.map((name, si) => (
                  <motion.div
                    key={name}
                    className="skill-card"
                    variants={fadeUp(0.15 + gi * 0.1 + si * 0.05)}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    whileHover={{ y: -6, scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <SkillIcon name={name} />
                    <span className="skill-card-name">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
