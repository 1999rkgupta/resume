import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+91 9102943849",
    href: "tel:+919102943849",
  },
  {
    icon: <FiMail />,
    label: "Email",
    value: "1999rkgupta@gmail.com",
    href: "mailto:1999rkgupta@gmail.com",
  },
  {
    icon: <FiMapPin />,
    label: "Location",
    value: "Bangalore, India",
    href: null,
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

const leftCardsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const leftCardVariants = {
  hidden: { opacity: 0, x: -100, rotateY: 25, transformPerspective: 1200 },
  visible: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_pmvnpke",
        "template_fkbayes",
        formRef.current,
        "RVQ_Jw3kZSdvBRvPp",
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setSending(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.div
          style={{ textAlign: "center", marginBottom: "20px" }}
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 className="section-title" variants={titleVariants}>Get In Touch</motion.h2>
          <motion.p className="section-subtitle" style={{ margin: "0 auto" }} variants={subtitleVariants}>
            Have a project in mind? Let's work together!
          </motion.p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={leftCardsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={i}
                className="contact-info-card"
                href={info.href}
                variants={leftCardVariants}
                whileHover={{
                  scale: 1.03,
                  x: 10,
                  rotateY: 5,
                  transformPerspective: 800,
                  boxShadow: "0 10px 25px rgba(124, 58, 237, 0.15)",
                  transition: { duration: 0.2 }
                }}
                style={{
                  textDecoration: "none",
                  cursor: info.href ? "pointer" : "default",
                  transformStyle: "preserve-3d"
                }}
              >
                <div className="contact-info-icon" style={{ transform: "translateZ(10px)" }}>{info.icon}</div>
                <div style={{ transform: "translateZ(5px)" }}>
                  <div className="contact-info-label">{info.label}</div>
                  <div className="contact-info-value">{info.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.a
              className="contact-whatsapp"
              href="https://wa.me/919102943849?text=Hi%20Ranjan,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
              target="_blank"
              rel="noopener noreferrer"
              variants={leftCardVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                rotateX: 10,
                transformPerspective: 800,
                boxShadow: "0 15px 30px rgba(37, 211, 102, 0.4)",
                transition: { duration: 0.2 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <FaWhatsapp size={22} style={{ transform: 'translateZ(10px)' }} />
              <span style={{ transform: 'translateZ(5px)' }}>Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 100, rotateY: -25, transformPerspective: 1200 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              scale: 1.01,
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.25)",
              transition: { duration: 0.3 }
            }}
          >
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="from_name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="from_email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-mobile">
                    Mobile Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="contact-mobile"
                    name="from_mobile"
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="What's this about?"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                disabled={sending}
                style={{
                  justifyContent: "center",
                  width: "100%",
                  opacity: sending ? 0.7 : 1,
                }}
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  boxShadow: "0 10px 20px rgba(124, 58, 237, 0.3)",
                }}
              >
                <FiSend />
                <span>{sending ? "Sending..." : "Send Message"}</span>
              </motion.button>

              {status === "success" && (
                <motion.div
                  className="form-status success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  className="form-status error"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Something went wrong. Please try again or contact me
                  directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
