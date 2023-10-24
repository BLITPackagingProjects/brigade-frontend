import React, { useEffect } from 'react'
import axios from 'axios'

const SubmitApp = (props) => {
    useEffect(()=>{
        const obj = {
            status:"pending"
        }
        axios.post(`http://localhost:9090/application/${props.match.params.uid}/${props.match.params.petId}`,obj).then((res)=> alert(res.data))
        .catch((err)=>console.log(err))
        props.history.replace("/customer-applications")
    },[])

  return (
    null
  )
}

export default SubmitApp
