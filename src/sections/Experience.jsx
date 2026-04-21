import { motion } from "framer-motion";

function Experience() {
  const items = [
    {
      title: "Web Development Intern – SkillCraft Technology",
      duration: "Sep 2025 – Dec 2025",
      desc: "Worked on real-world web development projects, applying strong problem-solving skills and delivering high-quality solutions under professional guidance.",
    },
    {
      title: "VTU Football Champion",
      duration: "2024 – 2025, 2025 – 2026",
      desc: "Led and contributed to team success in VTU Central Zone tournaments, demonstrating discipline, teamwork, and high performance under pressure.",
    },
    {
      title: "1st Prize – Theory of Computation Expo",
      duration: "2025",
      desc: "Recognized for strong analytical thinking and deep understanding of core computer science concepts.",
    },
    {
      title: "Certifications & Technical Growth",
      duration: "2024 – 2025",
      desc: "Completed certifications in DevOps, Software Engineering, Agile Methodology, AWS, JavaScript, and Programming in C, strengthening core technical foundation.",
    },
    {
      title: "NPTEL Course",
      duration: "2025",
      desc: "Completed NPTEL course on Data Structures and Algorithms using JAVA, enhancing problem-solving skills and algorithmic thinking.",
    },
  ];

  return (
    <section id="experience" style={styles.section}>
      <h2 style={styles.title}>Experience & Achievements</h2>

      <div style={styles.container}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            style={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.duration}>{item.duration}</p>
            <p style={styles.desc}>{item.desc}</p>
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

  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
  },

  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    textAlign: "left",
  },

  cardTitle: {
    marginBottom: "5px",
  },

  duration: {
    fontSize: "0.8rem",
    color: "#7c3aed",
    marginBottom: "10px",
  },

  desc: {
    color: "#94a3b8",
    fontSize: "0.9rem",
  },
};

export default Experience;