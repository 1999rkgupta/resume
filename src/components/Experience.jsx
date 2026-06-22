import { motion } from 'framer-motion';

const experiences = [
  {
    type: 'work',
    badge: 'Work',
    title: 'Software Engineer',
    company: 'TestYantra Software Solutions, Bangalore',
    date: 'August 2022 — Present',
    description: [
      'Designed and developed responsive, visually appealing web applications using HTML, CSS, JavaScript, and React.js.',
      'Implemented best practices for web performance optimization including code minification, image compression, and lazy loading.',
      'Ensured cross-browser and cross-device compatibility by thoroughly testing and debugging frontend code.',
      'Utilized Git for version control and team collaboration.',
      'Successfully delivered projects within established timelines, adapting to changing requirements.',
    ],
  },
  {
    type: 'education',
    badge: 'Education',
    title: 'Bachelor of Computer Application',
    company: 'Reva University, Bangalore',
    date: '2017 — 2020',
    description: [
      'Graduated with a CGPA of 8.0.',
      'Developed an "RTO Services" project as part of the academic curriculum.',
      'Strong foundation in computer science fundamentals, data structures, and algorithms.',
    ],
  },
];

const headerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Experience() {
  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '20px' }}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={titleVariants}>Experience</motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '0 auto' }} variants={subtitleVariants}>
            My professional journey and education
          </motion.p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -120 : 120,
                rotateY: i % 2 === 0 ? 25 : -25,
                transformPerspective: 1200
              }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="timeline-dot" />
              <motion.div 
                className="timeline-card"
                whileHover={{
                  scale: 1.03,
                  rotateY: i % 2 === 0 ? 5 : -5,
                  rotateX: -3,
                  z: 20,
                  boxShadow: "0 15px 35px rgba(124, 58, 237, 0.15)",
                  transition: { duration: 0.2 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="timeline-badge" style={{ transform: 'translateZ(10px)' }}>{exp.badge}</span>
                <h3 className="timeline-title" style={{ transform: 'translateZ(12px)' }}>{exp.title}</h3>
                <p className="timeline-company" style={{ transform: 'translateZ(8px)' }}>{exp.company}</p>
                <p className="timeline-date" style={{ transform: 'translateZ(6px)' }}>{exp.date}</p>
                <div className="timeline-desc" style={{ transform: 'translateZ(4px)' }}>
                  <ul>
                    {exp.description.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
