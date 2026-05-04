import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Send, MapPin, Phone } from 'lucide-react';
import '../styles/contact.css';


const EMAILJS_SERVICE_ID  ='service_ro4tclq';
const EMAILJS_TEMPLATE_ID = 'template_sxfoqor';
const EMAILJS_PUBLIC_KEY  ='4Yg6ZJrf3ukCoTOHq';
console.log(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY);
const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');

      // reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const contactDetails = [
    { icon: <Mail size={18} />, label: 'Email', value: 'getacherkifilie23@gmail.com', href: 'mailto:getacherkifilie23@gmail.com' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Ethiopia', href: 'https://maps.google.com/?q=Ethiopia' },
    { icon: <Phone size={18} />, label: 'Phone', value: '+251 970 143 109', href: 'tel:+251970143109' },
    { icon: <Phone size={18} />, label: 'Available', value: 'Mon – Sat, anytime', href: null },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/gech730', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/getacher-kifilie-2a33a9362/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:getacherkifilie23@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">

        <div className="section-header fade-in-up">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line" />
        </div>

        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info fade-in-up">
            <h3 className="contact-heading">Let's work together</h3>
            <p className="contact-text">
              Have a project in mind or just want to say hi? My inbox is always open.
              I'll get back to you as soon as possible.
            </p>

            <div className="contact-details">
              {contactDetails.map((d) => (
                <div className="contact-detail-item" key={d.label}>
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <span className="detail-label">{d.label}</span>
                    {d.href
                      ? <a href={d.href} className="detail-value link">{d.value}</a>
                      : <span className="detail-value">{d.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="contact-form-wrapper fade-in-up">
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>

              <div className="form-row">
                {/* NAME */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    required
                    placeholder="Your Name"
                  />
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    required
                    placeholder="Your Email"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                  required
                  placeholder="Subject"
                />
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  required
                  placeholder="Leave me a message..."
                  rows="5"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <><span className="spinner" /> Sending...</>
                ) : (
                  <><Send size={17} /> Send Message</>
                )}
              </button>

              {/* STATUS */}
              {status === 'success' && (
                <p className="form-status success">Message sent! I'll get back to you soon.</p>
              )}

              {status === 'error' && (
                <p className="form-status error">
                  Something went wrong. Please email me directly at{' '}
                  <a href="mailto:getacherkifilie23@gmail.com">getacherkifilie23@gmail.com</a>
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;