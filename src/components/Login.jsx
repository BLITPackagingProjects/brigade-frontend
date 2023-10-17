import axios from 'axios';
import { useRef } from "react";

const Login = () => {
    const uname = useRef(null);
    const pword = useRef(null);
    const submitHandler =(e)=>{
      
        e.preventDefault();        
        let data = JSON.stringify({
          "username": uname.current.value,
          "password": pword.current.value
        });
        let auth = btoa(`${uname.current.value}:${pword.current.value}`);
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: 'http://localhost:9090/login',
          headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Basic ${auth}` //+  
            
          },
          data : data
        };
        axios.request(config)
            .then((response) => {
              console.log(response);//JSON.stringify(response.data));
              if(response.status == 200){
                console.log('status: 200')
              }
            })
            .catch((error) => {
              console.log(error);
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
              <form className='form-control mt-4 ' method='post'>
                <h3 className='row justify-content-md-center'>Login</h3>
                <div></div>
                <div className="form-outline my-4">
                  <input type="email" className="form-control" ref={uname} placeholder="Email" />
                </div>
              
                
                <div className="form-outline mb-4">
                  <input type="password"  className="form-control" ref={pword} placeholder="Password" />
                </div>
              
                
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                  
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                      <label className="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                  </div>
              
                  <div className="col">
                    
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>      
                <div className='row justify-content-md-center'>
                  <button type="button" className="btn btn-primary btn-block mb-4 col-xm-12 col-sm-7" onClick={submitHandler}>Sign in</button>
                </div>                
                
                <div className="text-center">
                  <p>Not a member? <a href="#!">Register</a></p>
                  
                  
                </div>
              </form>
            </div>
          </div>
        </div>
        
    );
}

export default Login;