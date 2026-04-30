import './showHide.css'
import { useState } from 'react'

function ShowHide() {
  const [showFirstName, setShowFirstName] = useState(false)
  const [showLastName, setShowLastName] = useState(false)

  return (
    <div className="show-hide-container">
      <h1 className='show-hide-container-heading'>Show/Hide</h1>
      <div className="show-hide-button-container">
        
        <div className="firstName-button">
          <button onClick={() => setShowFirstName(prev => !prev)}>
            {showFirstName ? "Hide First Name" : "Show First Name"}
          </button>
          {showFirstName && <p className='display-name'>Joe</p>}
        </div>

        <div className="secondName-button">
          <button onClick={() => setShowLastName(prev => !prev)}>
            {showLastName ? "Hide Last Name" : "Show Last Name"}
          </button>
          {showLastName && <p className='display-name'>John</p>}
        </div>

      </div>
    </div>
  )
}

export default ShowHide