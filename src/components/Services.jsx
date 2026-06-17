import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiMonitor, FiSearch } from 'react-icons/fi';

const services = [
  {
    icon: <FiCode />,
    title: 'Web Development',
    description:
      'Building responsive, high-performance web applications using React.js, JavaScript, HTML5, and CSS3. Expert at translating design mockups into pixel-perfect, production-ready code with clean architecture and scalable patterns.',
  },
  {
    icon: <FiMonitor />,
    title: 'Responsive UI Design',
    description:
      'Crafting adaptive user interfaces that deliver seamless experiences across all devices and screen sizes. Utilizing modern layout techniques, media queries, and design systems to ensure every pixel looks perfect.',
  },
  {
    icon: <FiSearch />,
    title: 'SEO Optimization',
    description:
      'Implementing technical SEO best practices including semantic HTML, structured data, performance optimization, and accessibility standards to maximize search visibility and drive organic traffic.',
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section" id="services" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '20px' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What I Do</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Services I offer to bring your ideas to life
          </p>
        </motion.div>

        <div ref={ref} className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
