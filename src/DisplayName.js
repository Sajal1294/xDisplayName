import { useState } from "react";


function DisplayNAme(){

    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [fullName,setFullName]=useState('');
    const [error,setError]=useState({firstName:'',lastName:''});
    
    const validatename=(name)=>{
        if(!name.trim())
            return "This field is required!!";
        if(!/^[A-Za-z]+$/.test(name.trim()))
            return "Only letters are allowed!!";
        return '';

    }

    const handleFirstName=(e)=>{
        const value= e.target.value;
        setFirstName(value);
        setError((prev)=>({
            ...prev,
            firstName:validatename(value),
        }));

    };
    const handleLastName=(e)=>{
        const value= e.target.value;
        setLastName(value);
        setError((prev)=>({
            ...prev,
            lastName:validatename(value),
        }));

    };




    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const firstNameError= validatename(firstName);
        const lastNameError= validatename(lastName)

        setError({firstName:firstNameError,lastName:lastNameError});
        
        if(!firstNameError && !lastNameError){
            setFullName(`${firstName.trim()} ${lastName.trim()}`)
        }
        else{
            setFullName('')
        }

    };

    

    return(
        <div>
            <form >
            <h1>Full Name Display</h1>
            <label htmlFor="FirstName">First Name : </label>
            <input id="FirstName"type="text" value={firstName} placeholder="Enter First Name" onChange={handleFirstName} required></input>
            {
                error.firstName && (
                    <p style={{
                        color:"red"
                    }}>{error.firstName}</p>
                )
            }
            
            <br/>
            <label htmlFor="LastName">Last Name : </label>
            <input id="LastName" type="text" value={lastName} placeholder="Enter First Name" onChange={handleLastName} required></input>
            {
                error.lastName && (
                    <p style={{
                        color:"red"
                    }}>{error.lastName}</p>
                )
            }
            <br/>
            <button type="submit" onSubmit={handleSubmit} >Submit</button>

            </form>

            { fullName && (<p>Fullname: {fullName}</p>)
            }
            
            
            
        </div>
    );
}

export default DisplayNAme;