import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>

        {/* LEFT SIDE */}
        <motion.div
          style={styles.left}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={styles.heading}>
            Hi, I'm <span style={styles.name}>Sumit Kumar Singh</span>
          </h1>

          <h2 style={styles.type}>
            <Typewriter
              words={[
                "AI Developer",
                "Software Engineer",
                "Full Stack Builder",
              ]}
              loop={true}
              cursor
            />
          </h2>

          <p style={styles.desc}>
            Aspiring Software Engineer focused on building intelligent systems,
            solving real-world problems, and creating scalable applications.
          </p>

          <div style={styles.buttons}>
            <button style={styles.primary}>View Projects</button>
            <button style={styles.secondary}>Contact Me</button>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          style={styles.right}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div style={styles.imageWrapper}>
            <img src={profile} alt="profile" style={styles.image} />

            {/* 🔥 Badge */}
            <div style={styles.badge}>⚡ AI Enthusiast</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "radial-gradient(circle at top, #0f172a, #020617)",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    maxWidth: "1200px",
    flexWrap: "wrap",
  },

  left: {
    maxWidth: "550px",
  },

  heading: {
    fontSize: "3rem",
    fontWeight: "bold",
  },

  name: {
    background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  type: {
    marginTop: "10px",
    color: "#00f5ff",
    fontSize: "1.2rem",
  },

  desc: {
    marginTop: "20px",
    color: "#94a3b8",
    lineHeight: "1.6",
  },

  buttons: {
    marginTop: "25px",
    display: "flex",
    gap: "15px",
  },

  primary: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
    cursor: "pointer",
    color: "black",
    fontWeight: "bold",
  },

  secondary: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "1px solid #7c3aed",
    background: "transparent",
    color: "#7c3aed",
    cursor: "pointer",
  },

  right: {
    position: "relative",
  },

  imageWrapper: {
    position: "relative",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    padding: "5px",
    background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },

  badge: {
    position: "absolute",
    top: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#0f172a",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "0.75rem",
    border: "1px solid rgba(255,255,255,0.1)",
  },
};

export default Hero;