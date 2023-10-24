import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const AllPetList = () => {

const[pets, setPet] = useState([])
const[image, setImg] = useState('');

useEffect(()=>{
  loadPet();
}, []);

const loadPet =async()=>{
  const result = await axios.get("http://localhost:9090/pet");
  setPet(result.data);
}

    return(
      <div className="container">
        <div className="row">
        {
          pets.map((p) =>(
            <div className="col-md-4"><br/>
              <div className="card bg-light">
              <img className="card-img-top rounded mx-auto d-block mt-3" src={`http://localhost:9090/api/v1/pet/image/${p.pet_id}`}
              style={{height:240 + 'px',width:320 + 'px'}} alt={p.image}/>
                <div className="card-body text-center">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    <ul className="row">
                      <li className="col">
                        Age: {p.age}
                      </li>
                      <li className="col">
                        Color: {p.color}
                      </li>
                    </ul>
                    <ul className="row">
                      <li className="col">
                        Breed: {p.breed}
                      </li>
                      <li className="col">
                        Type: {p.type}
                      </li>
                    </ul>
                  </p>
                  <Link to={`/submitApp/${localStorage.getItem("uid")}/${p.pet_id}`} className="btn btn-success">Apply</Link>
                </div>
              </div>
            </div>
          ))
        } 
        </div><br/>
          <div className="d-flex justify-content-left">
            <Link to="/pet-register" className='btn btn-primary'>Add pet</Link>
          </div>
      </div>
    );

}

export default AllPetList;