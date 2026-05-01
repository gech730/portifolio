import { useRef } from 'react';
import { GraduationCap, Download } from 'lucide-react';
import '../styles/resume.css';

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

  return (
    <section id="cv" className="resume" ref={ref}>
      <div className="resume-container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">CV</h2>
          <div className="section-line" />
          <p className="section-description">
            Explore my professional journey, skills, and achievements. Download my complete CV to know more about my background and experience.
          </p>
        </div>

        <div className="resume-grid">
          {/* Education */}
          <div className="resume-col fade-in-up">
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
          </div>
        </div>

        {/* Download CTA */}
        <div className="resume-cta fade-in-up">
          <a href="/GetacherCV.pdf" download className="btn-download">
            <Download size={18} />
            Download Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
