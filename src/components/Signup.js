import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext';


export default function Signup() {
    const emailRef=useRef();
    const passRef=useRef();
    const passConfirmRef=useRef();
    const {signup} = useAuth()

    const [error,setError]=useState();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(passConfirmRef.current.value!==passRef.current.value){
          return setError("Passwords Do Not Match");
        }
        if(passRef.current.value.length<6){
          return setError("Password sould be atleast 6 characters long");
        }
        try{
          setError('');
           await signup(emailRef.current.value,passRef.current.value);
        }
        catch(err){
          setError("Failed to Create a new account");
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          {error} <br/>
        <label >Email address</label> <br/>
        <input ref={emailRef} type="email"/> <br/>
        <label >Password</label> <br/>
        <input ref={passRef} /> <br/>
        <label >Renter Password</label> <br/>
        <input ref={passConfirmRef}/> <br/>
        <button>Submit</button>
        </form>
    </div>
  )
}
