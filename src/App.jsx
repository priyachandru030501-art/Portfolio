
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const github = "https://github.com/priyachandru030501-art";

const skills = [
  { name: "HTML", icon: "bi-filetype-html" },
  { name: "CSS", icon: "bi-filetype-css" },
  { name: "JavaScript", icon: "bi-filetype-js" },
  { name: "Bootstrap", icon: "bi-bootstrap" },
  { name: "Python", icon: "bi-code-slash" },
  { name: "SQL", icon: "bi-database" },
  { name: "React", icon: "bi-braces" },
];

const projects = [
  "Cosmetic Shop",
  "Watch Shop",
  "Perfume Shop",
  "Grocery Shop",
  "Task Management",
  "Laundry Shop",
  "Irrigation System",
  "Document Website",
  "Spa Shop",
  "Paint Shop",
  "Pet Grooming Shop",
  "Book Store",
  "Children's Clothing",
  "Interior Showroom",
  "Organic Store",
  "Meat Shop",
  "Food Menu",
  "Jewelry Shop",
  "Bootstrap Website",
  "Mobile Shop",
  "Furniture Shop",
  "Blood Bank",
  "Camera Shop",
  "Home Appliances",
  "Medical Shop",
  "Tea Shop",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="portfolio-nav">
        <div className="nav-container">
          <a href="#home" className="brand" onClick={closeMenu}>
            <span className="brand-mark">M</span>
            <span>
              Mohana<span className="accent">priya</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" className="nav-contact" onClick={closeMenu}>
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="availability">
              <span className="availability-dot"></span>
              Welcome to my portfolio
            </span>

            <p className="hero-small">HELLO, I'M</p>

            <h1>
              Mohanapriya
              <br />
              <span>Frontend Developer</span>
            </h1>

            <p className="hero-description">
              I have completed my M.Com and typewriting. With two years of
              experience as a school accountant, I am now developing my
              technical skills and creating responsive, user-friendly websites.
            </p>

            <div className="hero-buttons">
              <a href="#about" className="primary-btn">
                About Me <i className="bi bi-arrow-right"></i>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="outline-btn"
              >
                <i className="bi bi-github"></i> GitHub Profile
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>2+</strong>
                <span>Years Accounting Experience</span>
              </div>
              <div>
                <strong>{skills.length}</strong>
                <span>Technical Skills</span>
              </div>
              <div>
                <strong>M.Com</strong>
                <span>Postgraduate Degree</span>
              </div>
            </div>
          </div>

          {/* SIMPLE CODE DESIGN - NO IMAGE OR WEBSITE PREVIEW */}
          <div className="code-card">
            <div className="code-card-header">
              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>portfolio.jsx</span>
              <i className="bi bi-code-slash"></i>
            </div>

            <div className="code-card-body">
              <p className="code-purple">const developer = {"{"}</p>
              <p>
                <span className="code-blue">name:</span>{" "}
                <span className="code-green">"Mohanapriya"</span>,
              </p>
              <p>
                <span className="code-blue">degree:</span>{" "}
                <span className="code-green">"M.Com"</span>,
              </p>
              <p>
                <span className="code-blue">role:</span>{" "}
                <span className="code-green">"Frontend Developer"</span>,
              </p>
              <p className="code-blue">skills: [</p>
              <p className="code-indent">
                <span className="code-yellow">"HTML", "CSS",</span>
              </p>
              <p className="code-indent">
                <span className="code-yellow">"React", "JavaScript",</span>
              </p>
              <p className="code-indent">
                <span className="code-yellow">"Bootstrap", "SQL", "Python"</span>
              </p>
              <p className="code-blue">],</p>
              <p>
                <span className="code-blue">passion:</span>{" "}
                <span className="code-green">"Building websites"</span>
              </p>
              <p className="code-purple">{"};"}</p>
              <p className="code-comment">
                // Always learning, always growing.
              </p>
            </div>

            <div className="code-card-footer">
              <span>
                <i className="bi bi-mortarboard"></i> M.Com Graduate
              </span>
              <span>JavaScript · React</span>
            </div>
          </div>
        </div>

        <a href="#about" className="scroll-indicator" aria-label="Scroll to About">
          <i className="bi bi-arrow-down"></i>
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-label">GET TO KNOW ME</span>
            <h2>About <span>Me</span></h2>
            <p>My education, experience and learning journey.</p>
          </div>

          <div className="about-grid">
            <div className="about-symbol">
              <div className="about-initial">M.</div>
              <span className="about-decoration decoration-one"></span>
              <span className="about-decoration decoration-two"></span>

              <div className="about-badge">
                <i className="bi bi-mortarboard-fill"></i>
                M.Com Graduate
              </div>
            </div>

            <div className="about-content">
              <h3>From Accounting to Web Development</h3>

              <p>
                I have completed my Master of Commerce (M.Com) and typewriting.
                I also have two years of experience working as a school
                accountant, where I gained knowledge of accounting and
                administration.
              </p>

              <p>
                I am developing my skills in HTML, CSS, JavaScript, Bootstrap,
                SQL, Python and React. I enjoy learning new technologies and
                applying my knowledge through website development.
              </p>

              <div className="education-cards">
                <div className="education-card">
                  <i className="bi bi-mortarboard"></i>
                  <div>
                    <strong>M.Com</strong>
                    <span>Postgraduate Qualification</span>
                  </div>
                </div>

                <div className="education-card">
                  <i className="bi bi-award"></i>
                  <div>
                    <strong>Typewriting</strong>
                    <span>Additional Qualification</span>
                  </div>
                </div>

                <div className="education-card">
                  <i className="bi bi-briefcase"></i>
                  <div>
                    <strong>2 Years</strong>
                    <span>School Accounting Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-label">WHAT I WORK WITH</span>
            <h2>My Technical <span>Skills</span></h2>
            <p>Technologies I have learned and practise.</p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <div className={`skill-icon skill-color-${index}`}>
                  <i className={`bi ${skill.icon}`}></i>
                </div>
                <h3>{skill.name}</h3>
                <span>Learning & Practising</span>
              </div>
            ))}
          </div>

          <div className="learning-note">
            <i className="bi bi-lightbulb"></i>
            <p>
              <strong>Always learning:</strong> Improving my coding skills
              through practice and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS - NAMES ONLY; NO PREVIEW IMAGES */}
      <section id="projects" className="section projects-section">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-label">MY WORK</span>
            <h2>My <span>Projects</span></h2>
            <p>
              Websites and applications I have worked on using different
              frontend technologies.
            </p>
          </div>

          <div className="my-projects-list">
            {projects.map((project, index) => (
              <div className="project-name" key={project}>
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="project-title">{project}</span>
                <i className="bi bi-code-slash"></i>
              </div>
            ))}
          </div>

          <div className="projects-github">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="outline-btn"
            >
              <i className="bi bi-github"></i>
              View All Projects on GitHub
              <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <div className="contact-box">
            <span className="section-label">LET'S CONNECT</span>
            <h2>Let's Connect <span>Together</span></h2>

            <p>
              I am interested in learning, building websites and exploring
              new opportunities. Feel free to connect with me.
            </p>

            <div className="contact-actions">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                <i className="bi bi-github"></i> Connect on GitHub
              </a>

              <a href="#home" className="outline-btn">
                <i className="bi bi-arrow-up"></i> Back to Home
              </a>
            </div>

            <div className="contact-details">
              <div>
                <i className="bi bi-mortarboard"></i>
                <span>M.Com Graduate</span>
              </div>
              <div>
                <i className="bi bi-code-slash"></i>
                <span>Frontend Development</span>
              </div>
              <div>
                <i className="bi bi-geo-alt"></i>
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="portfolio-footer">
        <div className="footer-container">
          <a href="#home" className="brand">
            <span className="brand-mark">M</span>
            <span>
              Mohana<span className="accent">priya</span>
            </span>
          </a>

          <p>
            Designed and built with <i className="bi bi-heart-fill"></i> by
            Mohanapriya
          </p>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="footer-github"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Mohanapriya. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
