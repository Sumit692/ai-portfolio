import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((p, i) => (
  <motion.div
    key={i}
    style={styles.card}
    whileHover={{
      y: -10,
      scale: 1.05,
      boxShadow: "0 0 40px rgba(124,58,237,0.6)",
    }}
  >
            <h3 style={styles.projectTitle}>{p.title}</h3>

            <p style={styles.desc}>{p.desc}</p>

            <p style={styles.tech}>{p.tech}</p>

            {/* 🔥 GitHub Button */}
            <a href={p.github} target="_blank" rel="noreferrer">
              <button style={styles.githubBtn}>
                <FaGithub /> View Code
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "LUMI – AI Teacher Chatbot",
    desc: "Multi-subject AI chatbot with voice input, memory, and Gemini API integration.",
    tech: "HTML • CSS • JavaScript • Gemini API",
    github: "https://github.com/Sumit692/lumi-chatbot",
  },
  {
    title: "VAANI – AI Text Assist",
    desc: "Accessibility tool using OCR, NLP, and TTS to simplify learning.",
    tech: "Python • Flask • NLP",
    github: "https://github.com/Sumit692/Vaani_Ai-TextAssist",
  },
  {
    title: "ToDo Web App",
    desc: "Full-stack task manager with authentication and CRUD.",
    tech: "Java • JSP • Servlet • MySQL",
    github: "https://github.com/Sumit692/Simple-TODO-Application",
  },
  {
    title: "Neon Navigation UI",
    desc: "Futuristic nav with animations and responsive design.",
    tech: "HTML • CSS • JS",
    github: "https://github.com/Sumit692/SCT_WD_1",
  },
  {
    title: "Scientific Calculator",
    desc: "Advanced calculator with scientific functions and history.",
    tech: "HTML • CSS • JS",
    github: "https://github.com/Sumit692/SCT_WD_2",
  },
  {
    title: "Tic-Tac-Toe Pro",
    desc: "Interactive game with AI opponent, animations, profiles, and responsive UI.",
    tech: "HTML • CSS • JavaScript • Minimax AI",
    github: "https://github.com/Sumit692/SCT_WD_3",
  }
];

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
  width: "300px",
  padding: "25px",
  borderRadius: "20px",
  backdropFilter: "blur(15px)",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  textAlign: "left",
  transition: "0.3s",
},

  projectTitle: {
    marginBottom: "10px",
  },

  desc: {
    color: "#94a3b8",
    marginBottom: "10px",
  },

  tech: {
    color: "#7c3aed",
    fontSize: "0.8rem",
    marginBottom: "15px",
  },

  githubBtn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#111827",
    color: "white",
    cursor: "pointer",
    fontSize: "0.9rem",
  },
};

export default Projects;