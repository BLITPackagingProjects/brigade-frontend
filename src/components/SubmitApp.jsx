import React, { useEffect } from 'react'
import axios from 'axios'

const SubmitApp = (props) => {
    useEffect(()=>{
        const obj = {
            status:"pending"
        }
        axios.post(`http://localhost:9090/application/${props.match.params.uid}/${props.match.params.petId}`,obj)
        .catch((err)=>console.log(err))
        props.history.push(`/customer-applications/${1}`)
    },[])

  return (
    null
  )
}

export default SubmitApp
