import { useEffect } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with cart functionality, user authentication, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team workspaces.',
      tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
      github: '#',
      live: '#',
    },
    {
      title: 'AI Chat Application',
      description: 'An intelligent chatbot powered by AI that can answer questions, generate content, and assist with various tasks.',
      tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      github: '#',
      live: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website showcasing projects, skills, and professional background.',
      tech: ['React', 'CSS3', 'Framer Motion'],
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather application that displays current conditions and forecasts using weather API.',
      tech: ['React', 'OpenWeather API', 'CSS3'],
      github: '#',
      live: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for creating and publishing blog posts with markdown support.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      live: '#',
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
                <div className="project-image-placeholder">
                  <span>Project {index + 1}</span>
                </div>
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
