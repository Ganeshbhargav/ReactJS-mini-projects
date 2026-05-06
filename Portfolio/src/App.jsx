import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Features from "./components/Features/Features"
import Projects from './components/Projects/Projects'

import Footer from "./components/Footer/Footer"
import Contact from './components/Contact/contact'

function App() {

  return (
      <div className="main-container">
        <Navbar />
        <Hero/>
        <Features/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App

