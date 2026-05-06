import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)

    const onMenu = ()=>{
        setMenuOpen(prev => !prev)
    }
    return (
        <nav className="nav">
            <a href="#hero" className="logo">Ganesh Bhargav</a>

            <div className="menu-icon" onClick={onMenu}> {menuOpen ? <FaTimes /> : <FaBars />}</div>

             <ul className={`links ${menuOpen ? "active" : ""}`}>
                <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#features" onClick={() => setMenuOpen(false)}>Features</a></li>
                <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                <li><a href="#contactMe" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar