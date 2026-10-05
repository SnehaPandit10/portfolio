import { useState, useEffect } from "react";
import "./App.css";

// const API_URL = "http://localhost:5001/api/profile";
const API_URL = "https://portfolio-md2a.onrender.com/api/profile";

const getLinks = (h) => {
  const raw = h.links ?? h.link ?? [];
  return Array.isArray(raw) ? raw : [raw];
};

function App() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then(setProfile)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <p className="state">Couldn't load the portfolio. Refresh in a minute.</p>;
  }
  if (!profile) {
    return (
      <p className="state">
        Waking up the server. This can take up to 30 seconds on the first visit.
      </p>
    );
  }

  const projects = profile.projects || [];
  const skills = profile.skills || [];

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#top" className="brand">{profile.name}</a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-text">
          {profile.currently && (
            <p className="status">
              <span className="dot" /> {profile.currently}
            </p>
          )}
          <h1>{profile.name}</h1>
          <h2>{profile.profession}</h2>
          <p className="intro">{profile.intro}</p>

          <div className="cta-row">
            <a className="btn primary" href="#projects">See my work</a>
            <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn ghost" href={profile.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

          {skills.length > 0 && (
            <ul className="skills">
              {skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          )}
        </div>

        <div className="hero-photo">
          <img src="/photo.jpg" alt={profile.name} />
        </div>
      </header>

      <section id="projects" className="section">
        <div className="section-head">
          <h2>Projects</h2>
          <p>Things I've built, with a focus on AI from here on.</p>
        </div>

        {projects.length === 0 ? (
          <p className="empty">My first AI project is in the works. Check back soon.</p>
        ) : (
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <span className={`tag ${p.status?.toLowerCase()}`}>{p.status}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                {p.tech?.length > 0 && (
                  <ul className="tech">
                    {p.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                )}

                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer">Code</a>
                  )}
                  {p.demo && (
                    <a href={p.demo} target="_blank" rel="noreferrer">Live demo</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="hobbies" className="section dark">
        <div className="section-head">
          <h2>Outside of code</h2>
          <p>What I do when the laptop is closed.</p>
        </div>

        <div className="hobby-grid">
          {profile.hobbies.map((h) => {
            const links = getLinks(h);
            return (
              <article className="hobby" key={h.name}>
                <h3>{h.name}</h3>
                {h.description && <p>{h.description}</p>}
                <div className="hobby-links">
                  {links.map((l, i) => (
                    <a key={l} href={l} target="_blank" rel="noreferrer">
                      {links.length > 1 ? `Watch reel ${i + 1}` : "Watch on Instagram"}
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Let's build something together</h2>
        <p>Open to interesting projects and conversations.</p>
        <div className="cta-row center">
          <a className="btn primary" href={profile.linkedin} target="_blank" rel="noreferrer">
            Message on LinkedIn
          </a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="btn ghost" href={profile.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </section>

      <footer>© 2026 {profile.name}</footer>
    </div>
  );
}

export default App;