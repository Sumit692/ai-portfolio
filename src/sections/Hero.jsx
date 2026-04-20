import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 🔥 Profile Image */}
        <img src={profile} style={styles.image} alt="profile" />

        <h1 style={styles.name}>Sumit Kumar Singh</h1>

        <h2 style={styles.tagline}>
          Building AI systems. Training like an athlete. Winning both.
        </h2>

        {/* ✅ FIXED TYPING TEXT */}
        <p style={styles.desc}>
          <Typewriter
            words={[
              "Building intelligent systems.",
              "Training like an athlete.",
              "Solving real-world problems with AI.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </p>

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
    padding: "60px 50px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 0 40px rgba(0,255,255,0.1)",
  },

  image: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    border: "2px solid #7c3aed",
  },

  name: {
    fontSize: "2.5rem",
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
    fontSize: "1.05rem",
    lineHeight: "1.6",
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