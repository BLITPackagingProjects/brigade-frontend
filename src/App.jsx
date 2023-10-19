import { useState } from 'react'
import './App.css'
import UploadPetImage from './components/UploadPetImage'
import RegisterPet from './components/PetRegistration'
import DisplayImage from './components/DisplayImage'

function App() {

  return (
    <div>
  
      <Router >
      <Navbar />
        <Routes>
            <Route exact path="/" element= {<Login />}></Route>
            <Route exact path="/login" element= {<Login />}></Route>
            <Route exact path="/pet" element= {<AllPetList />}></Route>
            <Route exact path="/*" element= {<NotFound />}></Route>
        </Routes>
        
    </Router>
    </div>
  )
}


export default App
