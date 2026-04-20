import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <div style={styles.nav}>
      <h2 style={styles.logo}>Sumit</h2>

      <div style={styles.links}>
        <a href="#home" onClick={() => setActive("home")}>Home</a>
        <a href="#about" onClick={() => setActive("about")}>About</a>
        <a href="#projects" onClick={() => setActive("projects")}>Projects</a>
        <a href="#skills" onClick={() => setActive("skills")}>Skills</a>
        <a href="#experience" onClick={() => setActive("experience")}>Experience</a>
        <a href="#contact" onClick={() => setActive("contact")}>Contact</a>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    backdropFilter: "blur(10px)",
    background: "rgba(0,0,0,0.3)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    zIndex: 1000,
  },

  logo: {
    color: "#00f5ff",
  },

  links: {
    display: "flex",
    gap: "20px",
  },
};

export default Navbar;