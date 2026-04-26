import './counter.css'
import {useState} from 'react'

function Counter (){
    const [count, setCount] = useState(0)

    const handleClick = ()=>{
        setCount(prev=>prev+1)
    }
    
    return(
        <div className="counter-container">
            <h1 className="counter-heading">The Button has been clicked <span className='counter-count'>{count}</span> times</h1>
            <p className='counter-desc'>Click the button to increase the count!</p>
            <button className="counter-button" onClick={handleClick}>Click Me</button>
        </div>
    )
}   

export default Counter