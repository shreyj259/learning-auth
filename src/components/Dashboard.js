import React from 'react'
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const {logout} = useAuth()
  const {currentUser}=useAuth();
  const handleLogout=async(e)=>{
    e.preventDefault();
    try{
        await logout();
    }catch{

    }
}
  return (
    <div>
      <div className='heading' style={{margin:"5px"}}>Dashboard</div>
    Welcome  {currentUser && currentUser.email} <br/> 
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
