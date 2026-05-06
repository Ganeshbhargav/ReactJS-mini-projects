import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      
      <h2 className="footer-logo">Ganesh Bhargav</h2>

      <p className="footer-text">
        Building modern web applications with passion and precision.
      </p>

      {/* Social Icons */}
      <div className="footer-socials">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:your@email.com">
          <FaEnvelope />
        </a>
      </div>

      {/* Bottom */}
      <p className="footer-copy">
        © {new Date().getFullYear()} Ganesh Bhargav. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;