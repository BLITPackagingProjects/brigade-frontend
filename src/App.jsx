import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UploadPetImage from './components/UploadPetImage'
import RegisterPet from './components/PetRegistration'
import DisplayImage from './components/DisplayImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    {/* <UploadPetImage/> */}
    {/* <RegisterPet/> */}
    <DisplayImage/>
    </div>
  )
}

export default App
