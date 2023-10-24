import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Applications = () => {
const [list, setList]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:9090/application/${localStorage.getItem("uid")}`).then((res)=> setList(res.data)).catch((err)=>console.log(err))
    },[])
  return (
    <div>
        <table className="table table-striped text-center">
        <thead>
    <tr>
      <th scope="col">Customer name</th>
      <th scope="col">Pet name</th>
      <th scope="col">Pet Color</th>
      <th scope="col">pet Breed</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
<tbody>

{
    list.map((item)=>{
    
   return( 
    <>
        <tr key={item.app_id}>
            <td>{item.user.firstName}</td>
            <td>{item.pet.name}</td>
            <td>{item.pet.color}</td>
            <td>{item.pet.breed}</td>
            <td>{item.status}</td>
            <td><Link to={`/update/${item.app_id}`} className='btn btn-primary'>Update</Link></td>
        </tr>
        
        {/* <button className='btn btn-success' onClick={(e)=>{
          const obj = {
            status:"finsihed"
          }
          axios.put(`http://localhost:9090/application/${item.app_id}`,obj).then((res)=>console.log(res.data))

        }}>Update</button> */}
    </>


   )
              
         
})
}
</tbody>
</table>
    </div>
  )
}

export default Applications
