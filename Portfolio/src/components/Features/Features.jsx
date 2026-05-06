import './Features.css'
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa";
function Content() {
  return (
   <section className='features' id='features'>
    <h2>What I Do</h2>

    <div className="features-container" >
        <div className="card">
          <FaCode className="icon" />
          <h3>Frontend Development</h3>
          <p>Building Responsive UI Using React, HTML, CSS, JavaScript</p>
        </div>

        <div className="card">
          <FaServer className="icon" />
          <h3>Backend Development</h3>
          <p>Creating APIs with Node.js, Express, and databases.</p>
        </div>

        <div className="card">
          <FaLayerGroup className="icon" />
          <h3>Full Stack Projects</h3>
          <p>Developing complete web apps using MERN stack.</p>
        </div>
    </div>
   </section>
  )
}

export default Content
