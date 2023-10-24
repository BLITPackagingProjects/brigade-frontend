import React, { useRef } from 'react'
import axios from 'axios';

const ApplicationUpdate = (props) => {

  const statusRef =  useRef();

const handleDelete = () =>{
  axios.delete(`http://localhost:9090/application/delete/${props.match.params.id}`)
  props.history.push("/applications")
}

const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(statusRef.current.value)
    const obj = {
        status:statusRef.current.value
      }
      axios.put(`http://localhost:9090/application/${props.match.params.id}`,obj).then((res)=>console.log(res.data))
      props.history.push("/applications")
}
  return (
    <div>
    <form action="PUT" onSubmit={handleSubmit}>
        <label htmlFor="status">Status</label>
        <input id="status" type="text" ref={statusRef}/>
        <button type="submit" className='btn btn-success'>Update</button>
    </form>
    <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ApplicationUpdate
