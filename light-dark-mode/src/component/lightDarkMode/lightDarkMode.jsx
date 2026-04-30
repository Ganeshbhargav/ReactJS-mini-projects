import './lightDarkMode.css'
import { use, useState } from 'react'

function LightDarkMode () {
    const [darkMode,setDarkMode] = useState(true)
    const onToggle = ()=>{
        setDarkMode(prev => !prev)
    }
    console.log(darkMode)
    return (
        <div className={darkMode? "dark mode-container" : "light mode-container"}>
            <h1 className='mode-container-heading'>Click To Change Mode</h1>
            <button className={darkMode? "darkMode-container-button" : "lightMode-container-button"} onClick={onToggle}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
    )
}

export default LightDarkMode