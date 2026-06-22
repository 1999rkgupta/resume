import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const roles = [
  'Software Engineer',
  'React Developer',
  'Frontend Specialist',
  'UI Enthusiast',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="hero-badge-dot" />
              Available for opportunities
            </motion.div>

            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, x: -80, rotateY: 15, transformPerspective: 1000 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Hi all, I'm <span className="name">Ranjan</span>
            </motion.h1>

            <motion.h2
              className="hero-nickname"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              ( Ranjan Kumar Gupta )
            </motion.h2>

            <motion.p
              className="hero-role"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {text}
              <span className="typed-cursor" />
            </motion.p>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              A passionate Software Engineer with 3+ years of experience specializing in frontend development. I craft responsive, user-friendly web applications using React.js, JavaScript, and modern CSS.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 30, x: -40 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                className="btn-primary"
                href="https://github.com/1999rkgupta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>⭐ Star Me On Github</span>
              </a>
              <a
                className="btn-outline"
                href="/Ranjan_Kumar_Gupta.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload />
                <span>See My Resume</span>
              </a>
            </motion.div>

            <motion.div
              className="hero-socials"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/ranjan-kumar-gupta-585567160/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                className="social-icon"
                href="https://github.com/1999rkgupta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.85, x: 80, rotateY: -20, transformPerspective: 1000 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-avatar-wrapper">
              <div className="hero-avatar-ring" />
              <div className="hero-avatar">
                <img src="/avatar.png" alt="Ranjan Kumar Gupta" />
              </div>
              <motion.div
                className="hero-float-card card-1"
                initial={{ opacity: 0, x: 30, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, -10, 0]
                }}
                viewport={{ once: false }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.8 },
                  x: { duration: 0.5, delay: 0.8 },
                  scale: { duration: 0.5, delay: 0.8 },
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }
                }}
              >
                💻 3+ Years Experience
              </motion.div>
              <motion.div
                className="hero-float-card card-2"
                initial={{ opacity: 0, x: -30, scale: 0.8 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  y: [0, 10, 0]
                }}
                viewport={{ once: false }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.0 },
                  x: { duration: 0.5, delay: 1.0 },
                  scale: { duration: 0.5, delay: 1.0 },
                  y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }
                }}
              >
                ⚡ React & JavaScript
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        onClick={scrollToAbout}
        style={{ cursor: 'pointer' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <div className="scroll-mouse" />
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
}
