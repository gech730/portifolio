import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Send, MapPin, Phone } from 'lucide-react';
import '../styles/contact.css';

// ── EmailJS config ──────────────────────────────────────────────
// 1. Sign up at https://www.emailjs.com (free tier: 200 emails/month)
// 2. Create a service (Gmail/Outlook) → copy Service ID
// 3. Create an email template → copy Template ID
//    Template variables used: {{from_name}}, {{from_email}}, {{message}}
// 4. Go to Account → API Keys → copy Public Key
// Replace the three placeholders below:
const EMAILJS_SERVICE_ID  = 'service_1al7wes';
const EMAILJS_TEMPLATE_ID = 'template_al16xf7';
const EMAILJS_PUBLIC_KEY  = 'w7kHZjjg_Q4A8v21Y';
// ───────────────────────────────────────────────────────────────

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay, ease: 'easeOut' } },
});

const Contact = () => {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
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
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const contactDetails = [
    { icon: <Mail size={18} />, label: 'Email', value: 'getacherkifilie23@gmail.com', href: 'mailto:getacherkifilie23@gmail.com' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Ethiopia', href: null },
    { icon: <Phone size={18} />, label: 'Available', value: 'Mon – Fri, 9am – 6pm EAT', href: null },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/gech730', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/getacher-kifilie-2a33a9362/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:getacherkifilie23@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-container">
        <motion.div
          className="section-header"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line" />
        </motion.div>

        <div className="contact-content">
          {/* Left info panel */}
          <motion.div
            className="contact-info"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
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
          </motion.div>

          {/* Right form */}
          <motion.div
            className="contact-form-wrapper"
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="email" id="email" name="from_email"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    required placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))}
                  required placeholder="Project inquiry / Collaboration / Hello"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message" name="message"
                  value={formData.message}
                  onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                  required placeholder="Tell me about your project or idea..."
                  rows="5"
                />
              </div>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
