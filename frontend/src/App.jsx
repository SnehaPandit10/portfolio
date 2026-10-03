import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://portfolio-md2a.onrender.com/api/profile")
      .then((response) => response.json())
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (!profile) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="portfolio">

      <nav className="navbar">
        <h2>{profile.name}</h2>

        <div className="nav-links">
          {/* <a href="#about">About</a> */}
          <a href="#hobbies">Hobbies</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      <section className="hero">

        <div className="hero-text">

          <p className="hello">HELLO, I'M</p>

          <h1>{profile.name}</h1>

          <h2>{profile.profession}</h2>

          <p>{profile.intro}</p>

          <div className="social-links">

            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </section>


      {/* <section id="about" className="section">

        <h2>About Me</h2>

        <p>{profile.intro}</p>

      </section> */}


      <section id="hobbies" className="section">

        <h2>My Hobbies</h2>

        <div className="hobbies">

          {profile.hobbies.map((hobby, index) => (
            <div className="hobby-card" key={index}>
              {hobby}
            </div>
          ))}

        </div>

      </section>


      <section id="contact" className="section contact">

        <h2>Let's Connect</h2>

        <div className="social-links">

          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram →
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn →
          </a>

        </div>

      </section>


      <footer>
        © 2026 {profile.name}
      </footer>

    </div>
  );
}

export default App;