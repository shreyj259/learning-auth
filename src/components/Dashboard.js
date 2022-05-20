import React from 'react'
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const {logout} = useAuth()
  const handleLogout=async(e)=>{
    e.preventDefault();
    try{
        await logout();
    }catch{

    }
}
  return (
    <div>Dashboard
    <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
