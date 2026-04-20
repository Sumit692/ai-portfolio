import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { value: "6+", label: "Projects Built" },
    { value: "1+", label: "Internship Experience" },
    { value: "4+", label: "Certifications" },
    { value: "15+", label: "Football Tournaments participated" },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {stats.map((s, i) => (
          <motion.div
            key={i}
            style={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h2 style={styles.value}>{s.value}</h2>
            <p style={styles.label}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    background: "#020617",
  },

  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
  },

  card: {
    width: "200px",
    padding: "25px",
    borderRadius: "15px",
    textAlign: "center",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
  },

  value: {
    fontSize: "2rem",
    background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  label: {
    color: "#94a3b8",
    marginTop: "5px",
  },
};

export default Stats;