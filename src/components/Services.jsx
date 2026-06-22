import { motion } from 'framer-motion';
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

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 20, transformPerspective: 1000 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Services() {
  return (
    <section className="section" id="services" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '20px' }}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={titleVariants}>What I Do</motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '0 auto' }} variants={subtitleVariants}>
            Services I offer to bring your ideas to life
          </motion.p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="service-card"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateX: 5,
                rotateY: -5,
                transformPerspective: 800,
                boxShadow: "0 25px 50px rgba(124, 58, 237, 0.22)",
                transition: { duration: 0.2 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="service-icon" style={{ transform: 'translateZ(15px)' }}>{service.icon}</div>
              <h3 className="service-title" style={{ transform: 'translateZ(10px)' }}>{service.title}</h3>
              <p className="service-desc" style={{ transform: 'translateZ(5px)' }}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
