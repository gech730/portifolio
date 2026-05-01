import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Send, MapPin, Phone, Clock } from 'lucide-react';
import '../styles/contact.css';

const EMAILJS_SERVICE_ID  = 'service_1al7wes';
const EMAILJS_TEMPLATE_ID = 'template_al16xf7';
const EMAILJS_PUBLIC_KEY  = 'w7kHZjjg_Q4A8v21Y';
// ───────────────────────────────────────────────────────────────

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
      setFormData({ name: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const contactDetails = [
    { icon: <Mail size={18} />,  label: 'Email',       value: 'getacherkifilie23@gmail.com', href: 'mailto:getacherkifilie23@gmail.com' },
    { icon: <MapPin size={18} />, label: 'Location',   value: 'Ethiopia',                    href: 'https://maps.google.com/?q=Ethiopia' },
    { icon: <Phone size={18} />, label: 'Phone',       value: '+251 970 143 109',             href: 'tel:+251970143109' },
    { icon: <Phone size={18} />, label: 'Available',   value: 'Mon – Sat, anytime',           href: null },
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
          {/* Left info panel */}
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

          {/* Right form */}
          <div className="contact-form-wrapper fade-in-up">
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text" id="name" name="from_name"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    required placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text" id="subject" name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                    required placeholder=""
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  required placeholder="leave me a message here ..."
                  rows="5"
                />
              </div>

              {/* Hidden field to ensure sender email is included in message body */}
              <input
                type="hidden"
                name="full_message"
                value={`From: ${formData.name}
Subject: ${formData.subject}

Message:
${formData.message}

---
Note: No email provided for reply.`}
              />

              <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <><span className="spinner" /> Sending...</>
                ) : (
                  <><Send size={17} /> Send Message</>
                )}
              </button>

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
