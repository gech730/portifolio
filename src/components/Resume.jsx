import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Download } from 'lucide-react';
import '../styles/resume.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: 'easeOut' } },
});

const experience = [
  {
    role: 'Full Stack Developer (Freelance)',
    company: 'Self-Employed',
    period: '2023 – Present',
    points: [
      'Built and deployed MERN stack web applications for clients.',
      'Designed responsive UIs with React and modern CSS.',
      'Integrated REST APIs and third-party payment gateways (Chapa).',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Tech Startup',
    period: '2022 – 2023',
    points: [
      'Developed reusable React components and improved page load performance.',
      'Collaborated with designers to implement pixel-perfect interfaces.',
    ],
  },
];

const education = [
  {
    degree: 'B.Tech – Computer Science & Engineering',
    school: 'University',
    period: '2020 – 2024',
    note: 'Focused on software engineering, algorithms, and AI.',
  },
];

const certifications = [
  'MERN Stack Development – Udemy',
  'React – The Complete Guide – Udemy',
  'Node.js & Express – Coursera',
  'MongoDB Basics – MongoDB University',
];

const Resume = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="resume" className="resume" ref={ref}>
      <div className="resume-container">
        <motion.div
          className="section-header"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="section-title">Resume</h2>
          <div className="section-line" />
        </motion.div>

        <div className="resume-grid">
          {/* Experience */}
          <motion.div
            className="resume-col"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="resume-col-header">
              <Briefcase size={20} />
              <h3>Experience</h3>
            </div>
            <div className="timeline">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  className="timeline-item"
                  variants={fadeUp(0.15 + i * 0.1)}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-period">{item.period}</span>
                    <h4 className="timeline-role">{item.role}</h4>
                    <span className="timeline-company">{item.company}</span>
                    <ul className="timeline-points">
                      {item.points.map((p, j) => <li key={j}>{p}</li>)}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education + Certs */}
          <div className="resume-col">
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="resume-col-header">
                <GraduationCap size={20} />
                <h3>Education</h3>
              </div>
              <div className="timeline">
                {education.map((item, i) => (
                  <div className="timeline-item" key={i}>
                    <div className="timeline-dot" />
                    <div className="timeline-content">
                      <span className="timeline-period">{item.period}</span>
                      <h4 className="timeline-role">{item.degree}</h4>
                      <span className="timeline-company">{item.school}</span>
                      <p className="timeline-note">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="certs-block"
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="resume-col-header">
                <Award size={20} />
                <h3>Certifications</h3>
              </div>
              <ul className="cert-list">
                {certifications.map((c, i) => (
                  <li key={i} className="cert-item">
                    <span className="cert-dot" />
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Download CTA */}
        <motion.div
          className="resume-cta"
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <a href="/resume.pdf" download className="btn-download">
            <Download size={18} />
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
