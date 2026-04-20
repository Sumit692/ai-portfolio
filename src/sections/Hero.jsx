import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.name}>Sumit Kumar Singh</h1>

        <h2 style={styles.tagline}>
          AI Developer × Athlete
        </h2>

        <motion.p
          style={styles.desc}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Building intelligent systems. Performing like an athlete.
        </motion.p>

        <div style={styles.buttons}>
          <button
            style={styles.primary}
            onClick={() =>
              document.getElementById("projects").scrollIntoView()
            }
          >
            View Projects
          </button>

          <button
            style={styles.secondary}
            onClick={() =>
              document.getElementById("contact").scrollIntoView()
            }
          >
            Contact
          </button>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "radial-gradient(circle at top, #0f172a, #020617)",
  },

  card: {
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "50px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 0 40px rgba(0,255,255,0.1)",
  },

  name: {
    fontSize: "3rem",
    fontWeight: "bold",
    background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  tagline: {
    marginTop: "10px",
    color: "#cbd5f5",
  },

  desc: {
    marginTop: "15px",
    color: "#94a3b8",
  },

  buttons: {
    marginTop: "25px",
  },

  primary: {
    padding: "12px 24px",
    marginRight: "10px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
    cursor: "pointer",
    fontWeight: "bold",
  },

  secondary: {
    padding: "12px 24px",
    borderRadius: "10px",
    border: "1px solid #7c3aed",
    background: "transparent",
    color: "#7c3aed",
    cursor: "pointer",
  },
};

export default Hero;