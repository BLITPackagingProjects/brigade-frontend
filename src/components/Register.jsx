import axios from "axios";
import { useRef } from "react";

const Register = (props) => {
    const fname = useRef("");
    const lname = useRef("");
    const uname = useRef("");
    const passwd = useRef("");

    const handleRegister = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
        "firstName": fname.current.value,
        "lastName": lname.current.value,
        "username": uname.current.value,
        "password": passwd.current.value
    });
        let config = {
        method: 'post',
        url: 'http://localhost:9090/user',
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
        };
        axios.request(config)
            .then((response) => {
            console.log(response);
            if(response.status == 200){
                console.log('status: 200')
                props.history.replace("/home")
            }
            }).catch((error) => {
            console.log(error);
            if (403 === error.response.status) {
                setAuthFailed("Registeration failed. Please try again");
            }else if (401 === error.response.status) {
                setAuthFailed("Registeration failed. Please try again");
            } else {
                return Promise.reject(error);
            }
        
            });
        }
    return(
        <div className="container ">
            <form className="form-control container" method="POST" onSubmit={handleRegister}>
                <div className="mb-3">
                    <input type="text" className="form-control" ref={fname} placeholder="First Name"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" ref={lname} placeholder="Last Name"/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" ref={uname} placeholder="Username"/>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" ref={passwd} placeholder="Password"/>
                </div>
            <button className="btn btn-primary" type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default Register;