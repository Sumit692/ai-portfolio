import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { title: "Programming", items: ["Java", "Python", "SQL"] },
    { title: "Web", items: ["HTML", "CSS", "JavaScript", "React"] },
    { title: "Backend", items: ["MySQL", "REST APIs"] },
    { title: "Core", items: ["DSA", "OOP", "Problem Solving"] },
  ];

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.title}>Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            style={styles.card}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={styles.cardTitle}>{skill.title}</h3>

            <div style={styles.tags}>
              {skill.items.map((item, i) => (
                <span key={i} style={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background: "#020617",
    textAlign: "center",
  },

  title: {
    fontSize: "2rem",
    marginBottom: "40px",
    background: "linear-gradient(90deg, #00f5ff, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  },

  card: {
    width: "260px",
    padding: "25px",
    borderRadius: "20px",
    backdropFilter: "blur(15px)",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 20px rgba(124,58,237,0.1)",
  },

  cardTitle: {
    marginBottom: "15px",
    fontSize: "1.2rem",
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  },

  tag: {
    padding: "6px 12px",
    borderRadius: "20px",
    background: "rgba(124,58,237,0.2)",
    fontSize: "0.8rem",
    color: "#c4b5fd",
  },
};

export default Skills;