import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

function Projects() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.grid}>
        {projects.map((p, i) => {
          const isOpen = openIndex === i;

          return (
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

              {/* Tech tags */}
              <div style={styles.tags}>
                {p.tech.map((t, idx) => (
                  <span key={idx} style={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>

              {/* 🔥 GitHub Button */}
              <a href={p.github} target="_blank" rel="noreferrer">
                <button style={styles.githubBtn}>
                  <FaGithub /> View Code
                </button>
              </a>

              {/* 🔥 Toggle */}
              <button
                style={styles.toggle}
                onClick={() =>
                  setOpenIndex(isOpen ? null : i)
                }
              >
                {isOpen ? "Hide details ▲" : "Read more ▼"}
              </button>

              {/* 🔥 EXPANDED DETAILS */}
              {isOpen && (
                <div style={styles.details}>
                  <div>
                    <h4>Key Features</h4>
                    <ul>
                      {p.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4>Challenges</h4>
                    <ul>
                      {p.challenges.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4>Impact</h4>
                    <ul>
                      {p.impact.map((im, idx) => (
                        <li key={idx}>{im}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "LUMI – AI Teacher Chatbot",
    desc: "Multi-subject AI chatbot with voice input, memory, and Gemini API integration.",
    tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
    github: "https://github.com/Sumit692/lumi-chatbot",
    features: ["Multi-subject learning", "Voice input", "Chat memory"],
    challenges: ["Handling API responses", "UI state management"],
    impact: ["Improved learning experience", "Fast concept understanding"],
  },
  {
    title: "VAANI – AI Text Assist",
    desc: "Accessibility tool using OCR, NLP, and TTS to simplify learning.",
    tech: ["Python", "Flask", "OCR", "NLP"],
    github: "https://github.com/Sumit692/Vaani_Ai-TextAssist",
    features: ["OCR extraction", "Text simplification", "Speech output"],
    challenges: ["Handling noisy text", "Improving NLP accuracy"],
    impact: ["Accessible learning", "Better comprehension"],
  },
  {
    title: "ToDo Web App",
    desc: "Full-stack task manager with authentication and CRUD.",
    tech: ["Java", "JSP", "Servlet", "MySQL"],
    github: "https://github.com/Sumit692/Simple-TODO-Application",
    features: ["Login system", "CRUD operations", "Responsive UI"],
    challenges: ["Session handling", "Database queries"],
    impact: ["Improved task management"],
  },
  {
    title: "Covid19 Testing Management",
    desc: "Web app for managing COVID-19 testing data with user roles.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    github: "https://github.com/Sumit692/Covid19-Testing-Management-System",
    features: ["Role-based access", "Data management", "Dashboard"],
    challenges: ["Database design", "User role handling"],
    impact: ["Reduced manual work", "Better tracking"],
  },
  {
    title: "Neon Navigation UI",
    desc: "Futuristic nav with animations and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sumit692/SCT_WD_1",
    features: ["Smooth scroll", "Responsive nav", "Hover effects"],
    challenges: ["Animation timing", "Responsive design"],
    impact: ["Improved UI experience"],
  },
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
    width: "320px",
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

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "10px",
  },

  tag: {
    padding: "5px 10px",
    borderRadius: "15px",
    background: "rgba(124,58,237,0.2)",
    fontSize: "0.75rem",
    color: "#c4b5fd",
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

  toggle: {
    marginTop: "10px",
    background: "none",
    border: "none",
    color: "#7c3aed",
    cursor: "pointer",
  },

  details: {
    marginTop: "15px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "10px",
    fontSize: "0.8rem",
  },
};

export default Projects;