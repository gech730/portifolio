import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Download } from 'lucide-react';
import '../styles/resume.css';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: 'easeOut' } },
});

const education = [
  {
    degree: 'Bsc. – Computer Science',
    school: 'University',
    period: '2024 – present',
    note: 'Focused on software engineering, algorithms, and AI.',
  },
];

const Resume = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cv" className="resume" ref={ref}>
      <div className="resume-container">
        <motion.div
          className="section-header"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="section-title">CV</h2>
          <div className="section-line" />
          <p className="section-description">
            Explore my professional journey, skills, and achievements. Download my complete CV to know more about my background and experience.
          </p>
        </motion.div>

        <div className="resume-grid">
          {/* Education */}
          <motion.div
            className="resume-col"
            variants={fadeUp(0.1)}
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
        </div>

        {/* Download CTA */}
        <motion.div
          className="resume-cta"
          variants={fadeUp(0.4)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <a href="/GetacherCV.pdf" download className="btn-download">
            <Download size={18} />
            Download Full CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
