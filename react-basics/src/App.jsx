import './App.css'
import Greeting from './components/Greeting'
import Welcome from './components/Welcome'

function App() {
  
  return (
    <>
      <div>
        <Welcome name="Nerimantas"/>
        <Welcome name="Rimante"/>
        <Greeting name="Nerimantas"/>
      </div>
    </>
  )
}

export default App
