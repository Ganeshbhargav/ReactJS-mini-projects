import './fruitsCounter.css'
import { useState } from 'react'

function Counter(){
    const [bananaCount, setBananaCount] = useState(0)
    const [mangoCount, setMangoCount] = useState(0)

    const bananaCountIncrease = ()=>{
        setBananaCount(p => p+1)
    }
    const mangoCountIncrease = ()=>{
        setMangoCount(p => p+1)
    }
    return (
        <div className='counter-container-app'>
            <h1 className='counter-container-app-heading'>Bob ate <span className='fruitsCount'>{mangoCount}</span> mangos <span className='fruitsCount'>{bananaCount}</span> bananas</h1>
            <div className="counter-count-container">
                <div className="mango-container">
                    <img className='image' src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="mango" />
                    <button className='btn' onClick={mangoCountIncrease}>Eat Mango</button>
                </div>
                <div className="banana-container">
                    <img className='image' src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="banana" />
                    <button className='btn' onClick={bananaCountIncrease}>Eat Banana</button>
                </div>
            </div>
        </div>
    )
}

export default Counter