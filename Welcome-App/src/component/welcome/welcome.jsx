import './welcome.css'
import { useState } from 'react'

function Welcome(){
    const [sub,setSub] = useState(false)
    const onSubscribe = ()=>{
        setSub(s=>!s)
    }
    return(
        <div className="welcome-app-container">
            <h1 className='welcome-app-heading'>Welcome</h1>
            <p className='welcome-app-desc'>Thank you! Happy Learning</p>
            <button className={`welcome-app-button ${sub? "clicked":"unclicked"}`} onClick={onSubscribe}>{sub? "Subscribed":"Subscribe"}</button>
        </div>
    )
}

export default Welcome