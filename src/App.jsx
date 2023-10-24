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
import Register from './components/Register';
import CustomerApplications from './components/CustomerApplications';
import Applications from './components/Applications';
import Logout from './components/Logout';
import SubmitApp from './components/SubmitApp';
import Home from './components/Home';
import ApplicationUpdate from './components/ApplicationUpdate';

function App() {
  return (
    <div>
      <Navbar />
        <Route exact path="/pet-image" component={UploadPetImage}></Route>
        <Route exact path="/pet-register" component={RegisterPet}></Route>
        <Route exact path="/pet-image/:pid" component={DisplayImage}></Route>
        <Route exact path="/" component= {Home}></Route>
        {localStorage.getItem("pass")?<Route exact path="/" component= {Home}></Route>:<Route exact path="/login" component= {Login}></Route>}
        <Route exact path="/logout" component= {Logout}></Route>

        <Route exact path="/pet" component= {AllPetList}></Route>
        <Route exact path="/register" component= {Register}></Route>
        <Route exact path="/submitApp/:uid/:petId" component= {SubmitApp}></Route>
        <Route exact path="/customer-applications/:val" component= {CustomerApplications}></Route>
        <Route exact path="/applications" component= {Applications}></Route>
        <Route exact path="/*" component= {NotFound}></Route>
        <Route exact path="/update/:id" component= {ApplicationUpdate}></Route>
        
    </div>
  )
}

export default App
