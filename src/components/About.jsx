import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Heart, Target } from 'lucide-react';
import '../styles/about.css';
import photo from '../assets/myphoto.jpg';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' } },
});

// Tech tags that float around the photo
const TECH_TAGS = [
  { label: 'React',      angle: -50   },
  { label: 'Node.js',   angle: 60  },
  { label: 'AI / ML',   angle: 120 },
  { label: 'MongoDB',   angle: 230 },
  // { label: 'Python',    angle: 240 },
  // { label: 'TypeScript',angle: 300 },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

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
        <motion.div
          className="section-header"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-content">
          {/* ── Photo with dev/AI frame ── */}
          <motion.div
            className="about-image-wrapper"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="photo-frame-container">

              {/* Outer glow ring — pulses like a radar */}
              <motion.div
                className="radar-ring radar-ring-1"
                animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="radar-ring radar-ring-2"
                animate={{ scale: [1, 1.32, 1], opacity: [0.25, 0, 0.25] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />

              {/* Corner bracket decorations — code-editor style */}
              <div className="bracket bracket-tl" />
              <div className="bracket bracket-tr" />
              <div className="bracket bracket-bl" />
              <div className="bracket bracket-br" />

              {/* Scan line that sweeps down */}
              <motion.div
                className="scan-line"
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />

              {/* The photo */}
              <div className="dev-photo">
                <img src={photo} alt="Getacher Kifilie" />
              </div>

              {/* Floating tech orbit tags */}
              {TECH_TAGS.map((tag, i) => {
                const rad = ((tag.angle - 90) * Math.PI) / 180;
                const r = 155; // orbit radius px
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <motion.span
                    key={tag.label}
                    className="orbit-tag"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? {
                      opacity: 1,
                      scale: 1,
                      y: [0, -5, 0],
                    } : {}}
                    transition={{
                      opacity: { delay: 0.4 + i * 0.1, duration: 0.4 },
                      scale:   { delay: 0.4 + i * 0.1, duration: 0.4 },
                      y: { delay: 0.4 + i * 0.1, duration: 2.5 + i * 0.3, repeat: Infinity, ease: 'easeInOut' },
                    }}
                  >
                    {tag.label}
                  </motion.span>
                );
              })}

              {/* Status badge */}
              <motion.div
                className="status-badge"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.4 }}
              >
                <span className="status-dot" />
                Available for work
              </motion.div>
            </div>
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            className="about-text"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
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
          </motion.div>
        </div>

        {/* ── Cards ── */}
        <div className="about-cards">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="about-card"
              variants={fadeUp(0.3 + index * 0.15)}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -8, borderColor: 'rgba(6,182,212,0.5)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-content">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
