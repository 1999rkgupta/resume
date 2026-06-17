import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiBriefcase } from 'react-icons/fi';
import { useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { number: 3, suffix: '+', label: 'Years Exp.' },
  { number: 5, suffix: '+', label: 'Projects' },
  { number: 8, suffix: '+', label: 'Skills' },
];

const details = [
  { icon: <FiMapPin />, label: 'Location', value: 'Bangalore, India' },
  { icon: <FiMail />, label: 'Email', value: '1999rkgupta@gmail.com' },
  { icon: <FiBriefcase />, label: 'Experience', value: 'TestYantra Software' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section className="section" id="about">
      <div className="container">
        <div ref={ref} className="about-content">
          {/* Image comes from left */}
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-image-wrapper">
              <img src="/avatar.png" alt="Ranjan Kumar Gupta" />
              <div className="about-image-gradient" />
            </div>
            <div className="about-stats">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="about-stat"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="about-stat-number">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info comes from right */}
          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 80 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="section-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Passionate software engineer with an eye for design
              </motion.p>
            </div>

            <motion.p
              className="about-bio"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I'm a Software Engineer with 3+ years of experience specializing in
              front-end development. I craft responsive, user-friendly web applications using
              React.js, JavaScript, and modern CSS. I thrive in collaborative environments,
              translating UI/UX designs into pixel-perfect interfaces while ensuring seamless
              integration with backend systems. Committed to writing clean, performant code
              and staying current with the latest technologies and best practices.
            </motion.p>

            <div className="about-details">
              {details.map((detail, i) => (
                <motion.div
                  key={i}
                  className="about-detail"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <div className="about-detail-label">{detail.label}</div>
                  <div className="about-detail-value">{detail.value}</div>
                </motion.div>
              ))}
              <motion.div
                className="about-detail"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="about-detail-label">Education</div>
                <div className="about-detail-value">BCA, Reva University</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
