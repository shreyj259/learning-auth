import React,{useRef} from 'react'
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const emailRef=useRef();
    const passRef=useRef();
    const {login} = useAuth()
    const {currentUser} = useAuth();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
           await login(emailRef.current.value,passRef.current.value);
        }
        catch{
            console.log("error");
        }
    }

    

  return (
    <div>
        {currentUser && currentUser.email}
        <form onSubmit={handleSubmit}>
        <label >Email address</label> <br/>
        <input ref={emailRef} type="email"/> <br/>
        <label >Password</label> <br/>
        <input ref={passRef} /> <br/>
        <button>Submit</button>
        </form>
        <br/>
        
    </div>
  )
}
