import './App.css'
import Notification  from './components/notification'

import dangerIcon from './assets/danger-icon-img.png'
import primaryIcon from './assets/primary-icon-img.png'
import successIcon from './assets/success-icon-img.png'
import warningIcon from './assets/warning-icon-img.png'

function App(){
  return (
     <div className='notifications-app-container'>
    <h1 className='title'>Notifications</h1>
    <div className='notifications-list-container'>
      <Notification
        imageUrl= {primaryIcon}
        message='Information Message'
        bgClass='primary-bg-color'
      />
      <Notification
        imageUrl={successIcon}
        message='Success Message'
        bgClass='success-bg-color'
      />
      <Notification
        imageUrl={warningIcon}
        message='Warning Message'
        bgClass='warning-bg-color'
      />
      <Notification
        imageUrl = {dangerIcon}
        message='Error Message'
        bgClass='danger-bg-color'
      />
    </div>
  </div>
  )
}

export default App