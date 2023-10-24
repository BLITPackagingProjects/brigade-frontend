import React, { useRef } from 'react'
import axios from 'axios';

const ApplicationUpdate = (props) => {

  const statusRef =  useRef();

const handleSubmit = (e)=>{
    e.preventDefault();
    // console.log(statusRef.current.value)
    const obj = {
        status:statusRef.current.value
      }
      axios.put(`http://localhost:9090/application/${props.match.params.id}`,obj).then((res)=>console.log(res.data))
      props.history.replace("/applications")
}
  return (
    <div>
    <form action="PUT" onSubmit={handleSubmit}>
        <label htmlFor="status">Status</label>
        <input id="status" type="text" ref={statusRef}/>

        <button className='btn btn-success'>Update</button>

    </form>
    </div>
  )
}

export default ApplicationUpdate
