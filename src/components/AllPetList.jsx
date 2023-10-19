import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

const AllPetList = () => {

const[pets, setPet] = useState([])


useEffect(()=>{
  loadPet();
}     
,[]);

const loadPet =async()=>{
  const result = await axios.get("http://localhost:8080/pet");
  setPet(result.data);
}





    return(
        <div>
            All Pets are here!
            <table class="table">
              
  <thead>
    <tr>
      <th scope="col">Pet Id</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Color</th>
      <th scope="col">Age</th>
      <th scope="col">Breed</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    
  {
                    pets.map((d) =>(
                        <tr key={d.pet_id}>
                            <td>{d.pet_id}</td>
                            <td>{d.name}</td>
                            <td>{d.age}</td>
                            <td>{d.breed}</td>
                            <td>{d.color}</td>
                            <td>
                              <Link to="/pet-details" className="btn btn-primary">View Details</Link>
                            </td>

                        </tr>
                    ))
                    }
        </tbody>
      </table>
      <Link to="/pet-register" className='btn btn-primary'>Add pet</Link>
    </div>
  );

}



export default AllPetList;