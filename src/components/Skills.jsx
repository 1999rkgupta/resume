import { motion } from 'framer-motion';
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 25, scale: 0.85, transformPerspective: 800 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', marginBottom: '20px' }}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={titleVariants}>Skills & Tools</motion.h2>
          <motion.p className="section-subtitle" style={{ margin: '0 auto' }} variants={subtitleVariants}>
            Technologies I work with every day
          </motion.p>
        </motion.div>

        <div className="skills-categories">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className="skills-category"
              initial={{ opacity: 0, y: 50, rotateX: 10, transformPerspective: 1000 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="skills-category-title">{category.title}</h3>
              <motion.div
                className="skills-grid-v2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
              >
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-card-v2"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.08,
                      rotateX: 10,
                      rotateY: -10,
                      y: -8,
                      z: 15,
                      boxShadow: `0 15px 30px ${skill.color}35`,
                      borderColor: `${skill.color}60`,
                      transition: { duration: 0.2 }
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div
                      className="skill-icon-v2"
                      style={{ color: skill.color, transform: 'translateZ(12px)' }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skill-name-v2" style={{ transform: 'translateZ(6px)' }}>{skill.name}</span>
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
