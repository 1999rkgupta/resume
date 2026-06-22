import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiBriefcase } from 'react-icons/fi';
import { useEffect, useState } from 'react';

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    }
  }
};

const left3dVariants = {
  hidden: { opacity: 0, x: -100, rotateY: 25, transformPerspective: 1200 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const right3dVariants = {
  hidden: { opacity: 0, x: 100, rotateY: -25, transformPerspective: 1200 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const topVariants = {
  hidden: { opacity: 0, y: -45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const bottomVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const statVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8, rotateX: 15, transformPerspective: 600 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const detailVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20, rotateX: 10, transformPerspective: 600 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {/* Image comes from left */}
          <motion.div
            className="about-image"
            variants={left3dVariants}
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
                  variants={statVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: -5,
                    z: 15,
                    boxShadow: "0 15px 30px rgba(124, 58, 237, 0.25)",
                    transition: { duration: 0.2 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="about-stat-number" style={{ transform: 'translateZ(10px)' }}>
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="about-stat-label" style={{ transform: 'translateZ(5px)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info comes from right */}
          <motion.div
            className="about-info"
            variants={right3dVariants}
          >
            <div>
              <motion.h2 className="section-title" variants={topVariants}>
                About Me
              </motion.h2>
              <motion.p className="section-subtitle" variants={bottomVariants}>
                Passionate software engineer with an eye for design
              </motion.p>
            </div>

            <motion.p className="about-bio" variants={bottomVariants}>
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
                  variants={detailVariants}
                  whileHover={{
                    scale: 1.03,
                    rotateY: 5,
                    rotateX: -3,
                    z: 10,
                    borderColor: 'var(--accent-1)',
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.2 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="about-detail-label" style={{ transform: 'translateZ(5px)' }}>{detail.label}</div>
                  <div className="about-detail-value" style={{ transform: 'translateZ(8px)' }}>{detail.value}</div>
                </motion.div>
              ))}
              <motion.div
                className="about-detail"
                variants={detailVariants}
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: -3,
                  z: 10,
                  borderColor: 'var(--accent-1)',
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.2 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="about-detail-label" style={{ transform: 'translateZ(5px)' }}>Education</div>
                <div className="about-detail-value" style={{ transform: 'translateZ(8px)' }}>BCA, Reva University</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
