import './App.css'
import Greeting from './components/Greeting'
import HelloWorld from './components/HelloWorld'
import Student from './components/Student'
import Welcome from './components/Welcome'

function App() {

  const student = {
    firstName: "Tadas",
    lastName: "Blinda",
    email: "tadas.blinda@mail.lt"

  }
  
  return (
    <>
      <div>
        {/* <Welcome name="Nerimantas"/>
        <Welcome name="Rimante"/>
        <Greeting name="Nerimantas"/> */}
        {/* <HelloWorld/> */}
        <Student
          student = {student}
        />

        {/* <Student
          firstName = "Vardenis"
          lastName = "Pavardenis"
          email = "vardenis.pavardenis@mail.lt"
        /> */}
      </div>
    </>
  )
}

export default App
