import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={styles.title}>Contact</h2>

        <p style={styles.text}>
          Let’s connect and build something impactful.
        </p>

        <div style={styles.icons}>
          <a
            href="mailto:sumitkumarsingh7502@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope style={styles.icon} />
          </a>

          <a
            href="https://github.com/Sumit692"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub style={styles.icon} />
          </a>

          <a
            href="https://linkedin.com/in/sumitkumarsingh24"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin style={styles.icon} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background: "#020617",
    display: "flex",
    justifyContent: "center",
  },

  card: {
    textAlign: "center",
    padding: "40px",
    borderRadius: "20px",
    backdropFilter: "blur(15px)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 30px rgba(0,255,255,0.1)",
  },

  title: {
    fontSize: "2rem",
    marginBottom: "10px",
    background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  text: {
    color: "#94a3b8",
    marginBottom: "20px",
  },

  icons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },

  icon: {
    fontSize: "1.5rem",
    color: "#7c3aed",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default Contact;