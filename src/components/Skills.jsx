import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact,
  FaGitAlt, FaPython, FaNodeJs, FaFigma
} from 'react-icons/fa';
import {
  SiTypescript, SiMysql, SiPostman, SiTailwindcss,
  SiNextdotjs, SiRedux, SiSass, SiFirebase
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#e34f26' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572b6' },
      { name: 'JavaScript', icon: <FaJsSquare />, color: '#f7df1e' },
      { name: 'TypeScript', icon: <SiTypescript />, color: '#3178c6' },
      { name: 'React', icon: <FaReact />, color: '#61dafb' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
      { name: 'Redux', icon: <SiRedux />, color: '#764abc' },
      { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06b6d4' },
      { name: 'Sass', icon: <SiSass />, color: '#cc6699' },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
      { name: 'Python', icon: <FaPython />, color: '#3776ab' },
      { name: 'MySQL', icon: <SiMysql />, color: '#4479a1' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28' },
      { name: 'Git', icon: <FaGitAlt />, color: '#f05032' },
      { name: 'Postman', icon: <SiPostman />, color: '#ff6c37' },
      { name: 'Figma', icon: <FaFigma />, color: '#f24e1e' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '20px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies I work with every day
          </p>
        </motion.div>

        <div ref={ref} className="skills-categories">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className="skills-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
            >
              <h3 className="skills-category-title">{category.title}</h3>
              <motion.div
                className="skills-grid-v2"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-card-v2"
                    variants={itemVariants}
                    whileHover={{
                      y: -10,
                      boxShadow: `0 20px 40px ${skill.color}20`,
                      borderColor: `${skill.color}40`,
                    }}
                  >
                    <div
                      className="skill-icon-v2"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skill-name-v2">{skill.name}</span>
                    <div
                      className="skill-glow"
                      style={{ background: skill.color }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
