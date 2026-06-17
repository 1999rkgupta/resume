import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+91 9102943849',
    href: 'tel:+919102943849',
  },
  {
    icon: <FiMail />,
    label: 'Email',
    value: '1999rkgupta@gmail.com',
    href: 'mailto:1999rkgupta@gmail.com',
  },
  {
    icon: <FiMapPin />,
    label: 'Location',
    value: 'Bangalore, India',
    href: null,
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      // EmailJS - Replace these with your actual IDs from emailjs.com
      // Service ID, Template ID, Public Key
      await emailjs.sendForm(
        'service_portfolio',     // Replace with your EmailJS Service ID
        'template_contact',      // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'        // Replace with your EmailJS Public Key
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '20px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="contact-content"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-info">
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                className="contact-info-card"
                href={info.href}
                style={{ textDecoration: 'none', cursor: info.href ? 'pointer' : 'default' }}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="contact-info-icon">{info.icon}</div>
                <div>
                  <div className="contact-info-label">{info.label}</div>
                  <div className="contact-info-value">{info.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.a
              className="contact-whatsapp"
              href="https://wa.me/919102943849?text=Hi%20Ranjan,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </motion.a>
          </div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="from_name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="from_email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={sending}
                style={{ justifyContent: 'center', width: '100%', opacity: sending ? 0.7 : 1 }}
              >
                <FiSend />
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
              </button>

              {status === 'success' && (
                <motion.div
                  className="form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  className="form-status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Something went wrong. Please try again or contact me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
