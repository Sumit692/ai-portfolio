import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" style={styles.section}>
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>About Me</h2>

        <p style={styles.text}>
          I am a Computer Science student focused on building AI-driven solutions 
          that solve real-world problems. I enjoy working with intelligent systems, 
          web technologies, and scalable backend architectures.
        </p>

        <p style={styles.text}>
          Beyond coding, I bring the mindset of an athlete — discipline, consistency, 
          and performance under pressure. As a football tournament winner, I apply 
          the same competitive edge to technology and development.
        </p>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    display: "flex",
    justifyContent: "center",
    background: "#020617",
  },

  card: {
    maxWidth: "800px",
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 0 30px rgba(124,58,237,0.1)",
  },

  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  text: {
    color: "#94a3b8",
    marginBottom: "15px",
    lineHeight: "1.6",
  },
};

export default About;