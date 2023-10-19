import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function DisplayImage() {
    const pid = 302;
    const[image, setImg] = useState()
 
    // async function handleChange(e) {
        const fetchImage = async () => {
            const res = await fetch(`http://localhost:8080/api/v1/pet/image/${pid}`);
            const imageBlob = await res.blob();
            const imageObjectURL = URL.createObjectURL(imageBlob);
            setImg(imageObjectURL);
          };
    //     const res = await axios.get("http://localhost:8080/pet/" + pid).
    //     then(res => 
    //         setImage({ 
    //         preview: URL.createObjectURL(res),
    //         })
    //     ).catch(err => console.log(err))
    //     const imageBlob = await res.blob();

    //    // formData.append("petImage", e.target.files[0]);
    // }
    useEffect(() => {
        fetchImage();
      }, []);
    return (
        <div>
            <h2>Pet Image</h2>
                
            
            <img src={image} style={{width: 480+'px', height: 640+'px'}} alt=' ' defaultValue={null}/><br/><br/>
            <Link to="/pet" className="btn btn-danger">Go back</Link>
        </div>
 
    );

}

export default DisplayImage