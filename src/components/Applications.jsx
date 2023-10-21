import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Applications = () => {
const [list, setList]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:9090/application/${localStorage.getItem("uid")}`).then((res)=> setList(res.data)).catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <table className="table table-striped text-center">
<tbody>

<thead>
    <tr>
      <th scope="col">Customer name</th>
      <th scope="col">Pet name</th>
      <th scope="col">Pet Color</th>
      <th scope="col">pet Breed</th>
      <th scope="col">Status</th>
    </tr>
  </thead>

{
    list.map((item)=>{
    
   return( 
        <tr key={item.app_id}>
            <td>{item.user.firstName}</td>
            <td>{item.pet.name}</td>
            <td>{item.pet.color}</td>
            <td>{item.pet.breed}</td>
            <td>{item.status}</td>

        </tr>


   )
              
         
})
}
</tbody>
</table>
    </div>
  )
}

export default Applications
