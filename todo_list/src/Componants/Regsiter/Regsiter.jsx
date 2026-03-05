import React, { useState } from 'react'
import "./Register.css"

function Regsiter() {
    const[Username,setUsername] = useState("");
    const[Email,setEmail] = useState("");
    const[Password,setPassword] = useState("");
    const[Error,setError] = useState(false);

    const onFormSubmit = async(event) => {
        try{
            event.preventDefault();
        const userDetails = 
        {
            Username,
            Email,
            Password
        }
        const getUser = await fetch(`http://localhost:3001/users?Email=${Email}`)
        let jsonData = await getUser.json();

        if(jsonData.length>0) {
            setError(true)
            return
        }
        setError(false)
            let res = await fetch("http://localhost:3001/users",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(userDetails)

            })
            if(res.ok) {
                console.log("User Registered Successfully");
            }

        } catch(error) {
            console.log(error.message);
        }
    }

  return (
    <div className="register-container">
        <h2 className="register-title">Register</h2>
        <form onSubmit={onFormSubmit}>
            <label>Username: </label><br />
            <input type="text" placeholder='Enter Your Name here...' 
            onChange = {()=>setUsername(event.target.value)}/>
            
            <br /><br />
            <label>Email: </label><br />
            <input type="email" placeholder='Enter Your Email here...'
            onChange = {()=>setEmail(event.target.value)}/>
            
            <br /><br />
            <label>Password: </label><br />
            <input type="password" placeholder='********'
            onChange = {()=>setPassword(event.target.value)}/>
            
            <br /><br />

            {Error && <p>User Already Existed</p>}
            <button type='submit'>Sign in</button>

        </form>
    </div>
  )
}

export default Regsiter