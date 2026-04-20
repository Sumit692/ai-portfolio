import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import ai from "../assets/ai.png";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>

        {/* LEFT SIDE */}
        <motion.div
          style={styles.card}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={profile} style={styles.image} alt="profile" />

          <h1 style={styles.name}>Sumit Kumar Singh</h1>

          <h2 style={styles.tagline}>
            Building AI systems. Training like an athlete. Winning both.
          </h2>

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

        {/* RIGHT SIDE AI IMAGE */}
        <motion.img
          src={ai}
          alt="ai"
          style={styles.aiImage}
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
  },

  container: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
    justifyContent: "center",
  },

  card: {
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "50px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 0 40px rgba(0,255,255,0.1)",
    maxWidth: "400px",
  },

  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "20px",
  },

  name: {
    fontSize: "2rem",
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
    marginTop: "20px",
  },

  primary: {
    padding: "10px 20px",
    marginRight: "10px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
    cursor: "pointer",
  },

  secondary: {
    padding: "10px 20px",
    borderRadius: "10px",
    border: "1px solid #7c3aed",
    background: "transparent",
    color: "#7c3aed",
    cursor: "pointer",
  },

  aiImage: {
    width: "350px",
    filter: "drop-shadow(0 0 20px #00f5ff)",
  },
};

export default Hero;