import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Hi, I'm Ganesh Bhargav</h1>
          <h2></h2>
          <p>
            I build scalable web applications using React, Node.js, and modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects">
              <button className="primary" >View Projects</button>
            </a>
            <button className="secondary">View Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;