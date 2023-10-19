import {useEffect, useState} from "react";
import axios from "axios";

const AllPetList = () => {

const[pets, setPet] = useState([])


useEffect(()=>{
  loadPet();
}     
,[]);

const loadPet =async()=>{
  const result = await axios.get("http://localhost:9090/pet");
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
      <th scope="col">Image</th>
    </tr>
  </thead>
  <tbody>
    
    {pets.map((pet) => {
            return(
              <div>
                <ul>
                  <li>{pet.pet_id}</li>
                  <li>{pet.pet_name}</li>
                  <li></li>
                  <li><button onClick={(pet)=>{
                    return (<PetDetail value={pet.pet_id}/>)
                  }}></button></li>
                </ul>
              </div>
            )
            
    })}
        </tbody>
      </table>
    </div>
  );

}



export default AllPetList;