import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Link, useParams} from 'react-router-dom'

function DisplayImage() {
    const {pid} = useParams();
    const[image, setImg] = useState()
 
        const fetchImage = async () => {
            const res = await fetch(`http://localhost:8080/api/v1/pet/image/${pid}`);
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
          };

    useEffect(() => {
        fetchImage();
      }, []);
    return (
        <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
            <h1>Pet Image</h1>   
            <img src={image} style={{width: 480+'px', height: 640+'px'}} alt=' ' defaultValue={null}/><br/>
            <Link to="/pet" className="btn btn-danger">Go back</Link>
        </div>
 
    );

}

export default DisplayImage