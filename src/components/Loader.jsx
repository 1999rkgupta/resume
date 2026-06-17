import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Logo from './Logo';

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4200); // Align with reference template 4.2s timing
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader-wrapper"
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="loader-logo-container">
          <Logo size={220} className="animating-loader-logo" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
