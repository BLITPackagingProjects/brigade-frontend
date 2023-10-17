import axios from 'axios';
import { useEffect, useState } from 'react';
const Home = () =>{
    const uname = localStorage.getItem("name");
    const pword = localStorage.getItem("pass");
    const [newData, setNewData] = useState("");
    useEffect(()=>{
        let data = JSON.stringify({
            "username": uname,
            "password": pword
          });
          let auth = btoa(`${uname}:${pword}`);
          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:9090/home',
            headers: { 
              'Content-Type': 'application/json', 
              'Authorization': `Basic ${auth}` //+  
              
            }
            //data : data
          };
          axios.request(config)
              .then((response) => {
                console.log(response);//JSON.stringify(response.data));
                if(response.status == 200){
                  console.log('status: 200 from Home')
                  setNewData(response.data)
                }
              })
              .catch((error) => {
                console.log(error);
              }); 
    },[])
    
    return(
        <div>
            <h2>Home Page</h2>
            <p>{newData}</p>
        </div>
    )
}
export default Home;