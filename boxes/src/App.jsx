import './App.css'
import Box from './components/boxes'
function App(){
  return (
    <div className='boxes-app-container'>
    <h1 className='heading'>Boxes</h1>
    <div className='boxes-container'>
      <Box text='Small' className='small-box' />
      <Box text='Medium' className='medium-box' />
      <Box text='Large' className='large-box' />
    </div>
  </div>
  )
}

export default App