import './speedometer.css'
import { useState } from 'react'
function Meter (props){
    const {imgSrc} = props
    const [speed, setSpeed] = useState(0)

    const onAccelerate = ()=>{
        if(speed<200){
            setSpeed(prev => prev+10)
        }
    }

    const onBrake = ()=>{
        if(speed>0){
            setSpeed(prev => prev-10)
        }
    }

    return (
        <div className="speedometer-container">
            <h1 className='speedometer-heading'>SPEEDOMETER</h1>
            <img src={imgSrc} alt="speedometer" className='speedometer-image'/>
            <h2 className="speedometer-speed">Speed is <span className={`${ speed > 100 ? "high" : speed>60 ? "medium" : "low"}`}>{speed}</span>mph</h2>
            <p className='speedometer-description'>Min Limit is 0mph, Max Limit is 200mph</p>
            <div className='speedometer-button-container'>
                <button className='accelerate-btn' onClick={onAccelerate}>Accelerate</button>
                <button className='brake-btn' onClick={onBrake}>Apply Brake</button>
            </div>
           <p className='error'>{speed>=200 ? "Speed Limit Exceeded" : speed<=0 ? "Minimum Limit Reached" : "" }</p>
        </div>
    )
}

export default Meter