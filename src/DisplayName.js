import { useState } from "react";


function DisplayNAme(){

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [fullName,setFullName]=useState('');




    const handleSubmit=(e)=>{
        e.preventDefault();

        if(firstName.trim()!=="" && lastName.trim()!==""){
            setFullName(`Full Name: ${firstName} ${lastName}`);
        }
        else{
            setFullName("");
        }

    };

    

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Full Name Display</h1>
            <label htmlFor="FirstName">First Name : </label>
            <input id="FirstName"type="text" value={firstName} placeholder="Enter First Name" onChange={(e)=>setFirstName(e.target.value)} required></input>

            
            <br/>
            <label htmlFor="LastName">Last Name : </label>
            <input id="LastName" type="text" value={lastName} placeholder="Enter First Name" onChange={(e)=>setLastName(e.target.value)} required></input>

            <br/>
            <button type="submit"  >Submit</button>

            </form>

            { fullName && (<div>{fullName}</div>)
            }
            
            
            
        </div>
    );
}

export default DisplayNAme;