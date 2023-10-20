import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadPetImage from './components/UploadPetImage'
import RegisterPet from './components/RegisterPet'
import DisplayImage from './components/DisplayImage'
import Navbar from './components/Navbar'
import Login from './components/Login'
import AllPetList from './components/AllPetList'
import NotFound from './components/NotFound'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/pet-image" element={<UploadPetImage/>}></Route>
        <Route exact path="/pet-register" element={<RegisterPet/>}></Route>
        <Route exact path="/pet-image/:pid" element={<DisplayImage/>}></Route>
        <Route exact path="/" element= {<Login/>}></Route>
        <Route exact path="/login" element= {<Login/>}></Route>
        <Route exact path="/pet" element= {<AllPetList/>}></Route>
        <Route exact path="/*" element= {<NotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default App