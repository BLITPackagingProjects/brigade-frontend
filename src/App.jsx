import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom";
import './App.css';
import AllPetList from './components/AllPetList';
import Home from './components/Home';
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Register from './components/Register';

function App() {
  return (
    <div>
        <Navbar />
        <Switch>
            <Route exact path="/" component= {Login }></Route>
            <Route exact path="/login" component= {Login}></Route>
            <Route exact path="/logout" component= {Logout}></Route>
            <Route exact path="/pet" component= {AllPetList}></Route>
            <Route exact path="/home" component= {Home}></Route>
            <Route exact path="/register" component= {Register}></Route>
            <Route exact path="/*" component= {NotFound}></Route>
        </Switch>
    </div>
  )
}
export default App
