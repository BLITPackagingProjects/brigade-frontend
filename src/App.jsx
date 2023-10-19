<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UploadPetImage from './components/UploadPetImage'
import RegisterPet from './components/PetRegistration'
import DisplayImage from './components/DisplayImage'
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import AllPetList from './components/AllPetList';
import Login from "./components/Login";
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
>>>>>>> origin/HusnaFrontBranch

function App() {

  return (
    <div>
<<<<<<< HEAD
    {/* <UploadPetImage/> */}
    {/* <RegisterPet/> */}
    <DisplayImage/>
=======
      
      <Router >
      <Navbar />
        <Routes>
            <Route exact path="/" element= {<Login />}></Route>
            <Route exact path="/login" element= {<Login />}></Route>
            <Route exact path="/pet" element= {<AllPetList />}></Route>
            <Route exact path="/*" element= {<NotFound />}></Route>
        </Routes>
        
    </Router>
>>>>>>> origin/HusnaFrontBranch
    </div>
  )
}


export default App
