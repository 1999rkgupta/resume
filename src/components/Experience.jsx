import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '20px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My professional journey and education
          </p>
        </motion.div>

        <div ref={ref} className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -80 : 80,
              }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.25,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-badge">{exp.badge}</span>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-date">{exp.date}</p>
                <div className="timeline-desc">
                  <ul>
                    {exp.description.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
