import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import AllPetList from './components/AllPetList';
import Home from './components/Home';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {

  return (
    <div>
      
      <Router >
      <Navbar />
        <Routes>
            <Route exact path="/" element= {<Login />}></Route>
            <Route exact path="/login" element= {<Login />}></Route>
            <Route exact path="/logout" element= {<Logout />}></Route>
            <Route exact path="/pet" element= {<AllPetList />}></Route>
            
            <Route exact path="/home" element= {<Home />}></Route>
          
            <Route exact path="/*" element= {<NotFound />}></Route>
        </Routes>
        
    </Router>
    </div>
  )
}


export default App
