import React, { useState } from 'react'
import axios from 'axios';

function UploadPetImage() {
  const pid = 302;
   const[image, setImage] = useState({
      preview: '',
      petImage: null
   })

   function handleChange(e) {
      //  setFile(URL.createObjectURL(e.target.files[0]));
      //  setImageName(e.target.files[0].name);
       setImage({ 
        preview: URL.createObjectURL(e.target.files[0]),
        petImage: e.target.files[0]
      })
      // formData.append("petImage", e.target.files[0]);
   }

   function handleSubmit(e) {
    //e.preventDefault();
    if (image.petImage !== null){
      let formData = new FormData();
      formData.append('petImage', image.petImage);
       axios.post("http://localhost:8080/api/v1/pet/image/" + pid, formData)
       .then()
       .catch(err => console.log(err))
   }
  }
   return (
       <div>
           <h2>Pet Image</h2>
           <form onSubmit={handleSubmit}>
               <input type='file' onChange={handleChange} required/>
               <button type='submit'>Upload</button><br/><br/>
           </form>
           <img src={image.preview} style={{width: 480+'px', height: 640+'px'}} alt=' ' defaultValue={null}/>
       </div>

   );

// import React from "react"; 
// import axios from "axios"; 
  
// class UploadPetImage extends React.Component { 
//   state = { 
//     files: null, 
//   }; 
  
//   handleFile(e) { 
//     // Getting the files from the input 
//     let files = e.target.files; 
//     console.log(files)
//     this.setState({ files }); 
//   } 
  
//   handleUpload(e) { 
//     let image = this.state.image; 
//     console.log(this.state.files);
//     let formData = new FormData(); 
  
//     //Adding files to the formdata 
//     formData.append("petImage", this.state.files); 
//     //formData.append("name", "Name"); 

//     const config = {     
//         headers: { 'content-type': 'multipart/form-data' }
//     }
  
//     axios.post("http://localhost:8080/api/v1/pet/image/1",formData,config)
//       .then((res) => { }) // Handle the response from backend here 
//       .catch((err) => { }); // Catch errors if any 
//   } 
  
//   render() { 
//     return ( 
//       <div> 
//         <h1>Select your files</h1> 
//         <input 
//           type="file"
//           multiple="multiple"  //To select multiple files 
//           onChange={(e) => this.handleFile(e)} 
//         /> 
//         <button onClick={(e) => this.handleUpload(e)} 
//         >Send Files</button> 
//       </div> 
//     ); 
//   } 
} 

export default UploadPetImage;