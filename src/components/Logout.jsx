
const Logout = (props) => {
    const username = localStorage.getItem("name");
    localStorage.clear();
    props.history.replace("/home")
    
    return(
        null
    )
}

export default Logout;