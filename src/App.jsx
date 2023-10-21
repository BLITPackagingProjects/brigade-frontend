import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadPetImage from './components/UploadPetImage'
import RegisterPet from './components/RegisterPet'
import DisplayImage from './components/DisplayImage'
import Navbar from './components/Navbar'
import Login from './components/Login'
import AllPetList from './components/AllPetList'
import NotFound from './components/NotFound'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
        <Route exact path="/pet-image" component={UploadPetImage}></Route>
        <Route exact path="/pet-register" component={RegisterPet}></Route>
        <Route exact path="/pet-image/:pid" component={DisplayImage}></Route>
        <Route exact path="/" component= {Login}></Route>
        <Route exact path="/login" component= {Login}></Route>
        <Route exact path="/pet" component= {AllPetList}></Route>
        <Route exact path="/*" component= {NotFound}></Route>
    </div>
  )
}

export default App
