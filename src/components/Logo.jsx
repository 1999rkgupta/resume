import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ size = 40, className = "" }) {
  const name = "Ranjan Gupta";
  
  // Stagger variants for entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      }
    }
  };

  const bracketLeftVariants = {
    hidden: { x: -40, opacity: 0, scale: 0.8 },
    visible: { 
      x: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 80, delay: 0.1 }
    }
  };

  const bracketRightVariants = {
    hidden: { x: 40, opacity: 0, scale: 0.8 },
    visible: { 
      x: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 80, delay: 0.1 }
    }
  };

  const letterVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <motion.div 
      className={`loader-logo-wrapper ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Soft Glow */}
      <motion.div 
        className="loader-glow"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Floating container */}
      <motion.div
        className="loader-float-container"
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Left Bracket */}
        <motion.span 
          className="loader-bracket left"
          variants={bracketLeftVariants}
        >
          &lt;
        </motion.span>
        
        {/* Name Words */}
        <span className="loader-name-container" style={{ display: "inline-flex", gap: "0.2em", flexWrap: "nowrap" }}>
          <motion.span
            variants={letterVariants}
            className="loader-name-word"
            style={{ display: "inline-block" }}
          >
            Ranjan
          </motion.span>
          <motion.span
            variants={letterVariants}
            className="loader-name-word"
            style={{ display: "inline-block" }}
          >
            Gupt{"\u200b"}a
          </motion.span>
        </span>
        
        {/* Right Bracket */}
        <motion.span 
          className="loader-bracket right"
          variants={bracketRightVariants}
        >
          /&gt;
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
