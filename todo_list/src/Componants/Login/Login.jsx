import React from 'react'
import { useState } from 'react';
import "./Login.css"

function Login() {

    const[Email,setEmail] = useState("");
    const[Password,setPassword] = useState("");
    const[Error,setError] = useState(false);

    const onFormSubmit = async (event) => {
        try{
            event.preventDefault();
            let res = await fetch(`http://localhost:3001/users?Email=${Email}`)
            let jsonRes = await res.json();

            if(jsonRes.length===0) {
                setError(true);
                return
            } else {
                if(Password==jsonRes[0].Password) {
                    localStorage.setItem("login_user",jsonRes[0].id)
                    console.log("Login Succesfully");
                    setError(false);
                } else {
                    setError(true);
                }
            }
            
        } catch(error) {
            console.log(error.message);
        }
    }
  return (
    <div className="login-container">
        <h1 className="login-title">Login</h1>
         <form onSubmit={onFormSubmit}>
            <label>Email: </label><br />
            <input type="email" placeholder='Enter Your Email here...'
            onChange = {(event)=>setEmail(event.target.value)}/>
            
            <br /><br />
            <label>Password: </label><br />
            <input type="password" placeholder='********'
            onChange = {(event)=>setPassword(event.target.value)}/>
            
            <br /><br />

            {Error && <p>Invalid Credintials</p>}
            <button type='submit'>Login</button>

        </form>
    </div>
  )
}

export default Login