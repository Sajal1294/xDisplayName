import { useState } from "react";


function DisplayNAme(){

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [fullName,setFullName]=useState('');
    const [errors,setErrors]=useState({});

    const validatename=(name)=>{
        return /^[A-Za-z]+$/.test(name);
    };
    




    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const newError={};
        if(!firstName.trim()){
            newError.firstName='first name is required';
        }
        else if(!validatename(firstName)){
            newError='Only letteres are allowed'
        }

        if(!lastName.trim()){
            newError.lastName='first name is required';
        }
        else if(!validatename(lastName)){
            newError='Only letteres are allowed'
        }
        setErrors(newError);

        if(Object.keys(newError).length===0){
            setFullName(`${firstName} ${lastName}`);
        }

        else {
            setFullName("");
        }
    };

    

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Full Name Display</h1>
            <label htmlFor="FirstName">First Name : </label>
            <input id="FirstName"type="text" value={firstName} placeholder="Enter First Name" onChange={(e)=>setFirstName(e.target.value)} required></input>
            {
                errors.firstName && (
                    <p style={{
                        color:"red"
                    }}>{errors.firstName}</p>
                )
            }
            
            <br/>
            <label htmlFor="LastName">Last Name : </label>
            <input id="LastName" type="text" value={lastName} placeholder="Enter First Name" onChange={(e)=>setLastName(e.target.value)} required></input>
            {
                errors.lastName && (
                    <p style={{
                        color:"red"
                    }}>{errors.lastName}</p>
                )
            }
            <br/>
            <button type="submit"  >Submit</button>

            </form>

            { fullName && (<p>Fullname: {fullName}</p>)
            }
            
            
            
        </div>
    );
}

export default DisplayNAme;