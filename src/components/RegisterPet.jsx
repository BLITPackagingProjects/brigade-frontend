import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

function RegisterPet(){
    // const navigate = useNavigate();
    const[petName, setName] = useState("");
    const[petAge, setAge] = useState("");
    const[petBreed, setBreed] = useState("");
    const[petColor, setColor] = useState("");
    const[petType, setType] = useState("");
    // const[petImage, setImage] = useState("");

    async function add(event){
        //event.preventDefault();
        try{
            await axios.post("http://localhost:8080/api/v1/pet",{
            name: petName,
            age: petAge,
            breed: petBreed,
            color: petColor,
            type: petType,
            // image: petImage
            });
            alert("Pet Registration Successfully!");
        }
        catch(err){
            alert("Pet was not added!");
        }
        // navigate('/seller-cart');
    }
   
    return(
        <div class="container p-3 my-5 border border-dark"> 
            <h1>Pet Registration</h1>
            <form onSubmit={add}>
            <div class="mb-3">
                    <label for="petName" class="form-label">Name: </label>
                    <input type="text" class="form-control" id="petName" required
                    placeholder="Enter name" autoFocus 
                    value={petName} 
                    onChange={(event) =>{
                        setName(event.target.value);
                    }}/>
                </div>
                <div class="mb-3">
                    <label for="petAge" class="form-label">Age: </label>
                    <input type="number" class="form-control" id="petAge" required
                    placeholder="Enter Age" min={1} max={60}
                    value={petAge} 
                    onChange={(event) =>{
                        setAge(event.target.value);
                    }}
                    />
                </div>
                <div class="mb-3">
                    <label for="petBreed" class="form-label">Breed: </label>
                    <input type="text" class="form-control" id="petBreed" required
                    placeholder="Enter breed"
                    value={petBreed} 
                    onChange={(event) =>{
                        setBreed(event.target.value);
                    }}
                    />
                </div>
                <div class="mb-3">
                    <label for="petColor" class="form-label">Color: </label>
                    <input type="text" class="form-control" id="petColor" required
                    placeholder="Enter color"
                    value={petColor} 
                    onChange={(event) =>{
                        setColor(event.target.value);
                    }}
                    />
                </div>
                <div class="mb-3">
                    <label for="petType" class="form-label">Type: </label>
                    <input type="text" class="form-control" id="petType" required
                    placeholder="Enter type"
                    value={petType} 
                    onChange={(event) =>{
                        setType(event.target.value);
                    }}
                    />
                </div>
                {/* <div class="mb-3">
                    <label for="petImage" class="form-label">Image: </label>
                    <input type="text" class="form-control" id="petImage" required
                    placeholder="Select image" onClick={}
                    value={petImage} 
                    onChange={(event) =>{
                        setImage(event.target.value);
                    }}
                    />
                </div> */}
                <Link to="/pet-image" className="btn btn-primary" target="_blank">Add image</Link><br/><br/>
                <button t toype="submit" class="btn btn-success">Submit</button>&nbsp;
                {/* <Link to="/" class="btn btn-danger">Cancel</Link> */}
            </form>
        </div>
    )
}

export default RegisterPet