import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid col-md-6 col-lg-8 ">
                {/* <a className="navbar-brand" href="/home">Navbar</a> */}
                <div class="container">
    <a classname="navbar-brand" href="#">
      <img className="rounded-circle" src="/brandLogo.jpg" alt="Bootstrap" width="100" height="100"/>
    </a>
  </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/pet">Inventory</Link>
                    </li>
                    {/* {localStorage.getItem("role") == "ROLE_USER" && <Link className="nav-link " to={`/applications/${localStorage.getItem('uid')}`} tabindex="-1">My Appliction</Link>} */}
                    {localStorage.getItem("pass")?
                    (localStorage.getItem("role") == "ROLE_Customer"?<Link className="nav-link" to="/customer-applications/1">My Applications</Link>:<Link to="/applications">Applications</Link>):null
                    }
                    {/* {localStorage.getItem("role") == "ROLE_EMPLOYEE" && <Link className="nav-link " to="/applications" tabindex="-1">Applictions</Link>} */}
                    
                    <li className="nav-item">
                    {/* {localStorage.getItem("name") && <Link className="nav-link " to="/logout" tabindex="-1">Logout</Link>} */}
                    {
                        localStorage.getItem("pass")?<Link className="nav-link " to="/logout" tabindex="-1">Logout</Link>:null
                    }
                    {localStorage.getItem("name")==null && <Link className="nav-link " to="/login" tabindex="-1">Login</Link>}
                    </li>
                        <li className="nav-item">

                   
                        <p className="text-white">
                            
                            {localStorage.getItem("name")}
                            </p>
                        </li>
                        <li className="nav-item">
                            
                        <img src="/user.jpg" className="rounded-circle" width="100" height="100"></img>
                
                        </li>
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </ul>
                
                </div>
            </div>
        </nav>
    );
}
export default Navbar;