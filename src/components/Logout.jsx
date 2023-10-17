import { Link } from "react-router-dom";
const Logout = () => {

    const username = localStorage.getItem("name");
    localStorage.clear();
    return(
        <div>
            <h2>See you again {username}</h2>
             <Link to="/login" >Login again</Link>
        </div>
    )
}

export default Logout;