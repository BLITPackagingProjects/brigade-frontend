import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

function RegisterPet(props){
    // const navigate = useNavigate();
    var formData = new FormData();
  
     function handleChange(e) {
         formData.append('petImage',e.target.files[0]);
     }
  
    let [values, setValues] = useState({
        name:'',
        color:'',
        breed:'',
        type:'',
        age:''
    })

    async function handleSubmit(e) {
        e.preventDefault();
        formData.append('name', values.name);
        formData.append('age', values.age);
        formData.append('color', values.color);
        formData.append('breed', values.breed);
        formData.append('type', values.type);
        
        try{
            await axios.post("http://localhost:9090/api/v1/pet", formData)
            .then(alert("Pet Registered Successfully!"))
            .catch(err => console.log(err))
            props.history.replace("/pet");
        }
        catch(err){
            alert("Pet Was NOT Registered!")
        }
    }
    return(
        <div className="container p-3 my-5 border border-dark"> 
            <h1>Pet Registration</h1>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="petName" className="form-label">Name: </label>
                    <input type="text" className="form-control" id="petName" required
                    placeholder="Enter name" autoFocus 
                    value={values.name} 
                    onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="petAge" className="form-label">Age: </label>
                    <input type="number" className="form-control" id="petAge" required
                    placeholder="Enter Age" min={1} max={60}
                    value={values.age} 
                    onChange={e => setValues({...values, age: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="petBreed" className="form-label">Breed: </label>
                    <input type="text" className="form-control" id="petBreed" required
                    placeholder="Enter breed"
                    value={values.breed} 
                    onChange={e => setValues({...values, breed: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="petColor" className="form-label">Color: </label>
                    <input type="text" className="form-control" id="petColor" required
                    placeholder="Enter color"
                    value={values.color} 
                    onChange={e => setValues({...values, color: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="petType" className="form-label">Type: </label>
                    <input type="text" className="form-control" id="petType" required
                    placeholder="Enter type"
                    value={values.type} 
                    onChange={e => setValues({...values, type: e.target.value})}
                    />
                </div>
                <label htmlFor="petImage">Image: </label><br/>
                <input type='file' id="petImage" onChange={handleChange} required />
                <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
                <Link to="/pet" className="btn btn-danger">Cancel</Link>
            </form>
        </div>
    )
}

export default RegisterPet