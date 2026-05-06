import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "MERN Auth System",
    desc: "Secure authentication system with JWT, login/signup, and protected routes.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ganeshbhargav/mern-auth",
    demo: "https://mern-auth.vercel.app",
  },
  {
    title: "E-Commerce Web App",
    desc: "Full-featured shopping app with cart, checkout, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/ganeshbhargav/ecommerce-app",
    demo: "https://ecommerce-app.vercel.app",
  },
  {
    title: "Real-Time Chat App",
    desc: "Chat application with real-time messaging using Socket.io.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tech: ["React", "Node.js", "Socket.io"],
    github: "https://github.com/ganeshbhargav/chat-app",
    demo: "https://chat-app.vercel.app",
  },
  {
    title: "Advanced Todo App",
    desc: "Task manager with categories, deadlines, and drag-and-drop support.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/ganeshbhargav/todo-app",
    demo: "https://todo-app.vercel.app",
  },
  {
    title: "Weather App",
    desc: "API-based weather app showing real-time data with location search.",
    image: "https://images.unsplash.com/photo-1501973801540-537f08ccae7b",
    tech: ["JavaScript", "API", "CSS"],
    github: "https://github.com/ganeshbhargav/weather-app",
    demo: "https://weather-app.vercel.app",
  },
  {
    title: "Blog Platform",
    desc: "Full stack blog app with authentication and CRUD operations.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/ganeshbhargav/blog-app",
    demo: "https://blog-app.vercel.app",
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            
            {/* Image */}
            <img src={project.image} alt={project.title} />

            {/* Overlay */}
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              {/* Tech Tags */}
              <div className="tech">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="buttons">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;