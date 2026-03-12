import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const mailtoLink = `mailto:getacherkifilie23@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: <Github size={22} />, url: 'https://github.com/gech730', label: 'GitHub' },
    { icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/in/getacher-kifilie-2a33a9362/', label: 'LinkedIn' },
    { icon: <Mail size={22} />, url: 'mailto:getacherkifilie23@gmail.com', label: 'Email' },
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
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through the form or connect with me on social media.
            </p>
            
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows="5"
                />
              </div>
              
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
              {status === 'success' && <p className="form-status success">Message sent successfully!</p>}
              {status === 'error' && <p className="form-status error">Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
