import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/projects.css';
import pic from '../assets/portfolio.png'
import foodDelivery from '../assets/foodDelivery.png'
import smart_bdu from '../assets/smartBDU.png'
import smart_bdu_assistant from '../assets/smartbdu_ai.png'
import stud from '../assets/stud.png'
const Projects = () => {
  const projects = [
    {
      title: 'Food Delivery website',
      description: 'A full-featured online food delivery platform with cart functionality, user authentication, and  payment integration.',
      tech: ['React', 'Node.js','chapa payment api', 'MongoDB'],
      github: 'https://github.com/gech730/food-delivery',
      live: 'https://roza-frontend.vercel.app/',
      image: foodDelivery,
    },
   
    {
      title: 'smart bdu ai assistant',
      description: 'An AI-powered chatbot designed to assist students at Bahir Dar University with academic inquiries, campus information, and personalized support.',
      tech: ['React', 'CSS3', 'Vite', 'haggingface api', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/gech730/smartBDU-AI',
      live: 'https://smartbdu-assistant.vercel.app/',
      image: smart_bdu_assistant,
    },
  
    {
      title: 'student productive dashboard',
      description: 'A modern web application designed to help students improve productivity, manage academic tasks, and organize daily activities efficiently.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/gech730/studentProductiveDashboard',
      live: 'https://student-productive-dashboard.vercel.app/',
      image: stud,
    },
      {
      title: 'smartBDU',
      description: 'A digital platform designed to improve campus life at Bahir Dar University by connecting students through essential services like skill sharing, resource exchange, and communication tools',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/gech730/smartBDU',
      live: 'https://smartbdu.vercel.app',
      image: smart_bdu,
    }
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
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="project-card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-image-link"
                  aria-label={`Visit ${project.title} live demo`}
                >
                  <div className="project-image-placeholder">
                    <img
                      style={{width:"100%",height:"100%",borderRadius:"4px",boxShadow:"0px 0px 10px white"}}
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="project-image-overlay">
                      <ExternalLink size={28} />
                      <span>View Live</span>
                    </div>
                  </div>
                </a>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
