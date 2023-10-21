import axios from 'axios';
import { useRef } from "react";
import { Link } from 'react-router-dom';

const Login = (props) => {
    const uname = useRef(null);
    const pword = useRef(null);
    const submitHandler = (e)=>{
        e.preventDefault();

        const username =  uname.current.value ;
        const password = pword.current.value;
        if(username==null) return;
        let data = JSON.stringify({
          "username": username,
          "password": password
        });
        let auth = btoa(`${uname.current.value}:${pword.current.value}`);
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://localhost:9090/login',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${auth}`
          },
          data : data
        };
        axios.request(config)
            .then((response) => {
              console.log(response.data);//JSON.stringify(response.data));
              if(response.status == 200){
                console.log('status: 200')
                localStorage.setItem("pass", response.data.password);
                localStorage.setItem("name", uname.current.value);
                localStorage.setItem("uid", response.data.id);
                localStorage.setItem("role", response.data.role.name);
                props.history.replace("/home") ;
              }
            })
            .catch((error) => {
              if (403 == error.response.status) {
                console.log("Authentication failed. Please try again");
                
              } 
              if (401 == error.response.status) {
                console.log("Authentication failed. Please try again");
                
              } 
              
              
            });
    }
    return(
        /*
        <div className="" >
            <input type="text" onChange={(e) => uname.current = e.target.value} placeholder="Username" />
            <input type="password" onChange={(e)=>pword.current = e.target.value} placeholder="Password" />
            <button className="btn btn-primary" type="submit" onClick={submitHandler} >Login</button>
        </div>
        */
        <div className='container '>
          <div className='row justify-content-center'>
            <div className='col-md-4 col-sm-8 justify-content-md-center'>
              <form className='form-control mt-4 ' method='POST' onSubmit={submitHandler}>
                <h3 className='row justify-content-md-center'>Login</h3>
                <div className='text-center textColor-red'>{}</div>
                <div className="form-outline my-4">
                  <input type="text"  className="form-control" ref={uname} placeholder="Username" required/>
                </div>             
                
                <div className="form-outline mb-4">
                  <input type="password" required className="form-control" ref={pword} placeholder="Password" />
                </div>
              
                
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                  
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                      <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                    </div>
                  </div>
              
                  <div className="col">
                    
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>      
                <div className='row justify-content-md-center'>
                   {/*(uname!=null && pword!=null)?submitHandler:null*/} 
                  <button type="submit" className="btn btn-primary btn-block mb-4 col-xm-12 col-sm-7" >Sign in</button>
               
                   </div>                
                
                <div className="text-center">
                  <p>Not a member? <Link to="/register">Register</Link></p>
                  
                  
                </div>
              </form>
            </div>
          </div>
        </div>
        
    );
}

export default Login;