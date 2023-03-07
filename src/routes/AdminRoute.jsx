import React from 'react'
import Homepage from '../pages/Homepage';

const AdminRoute = ({children}) => {
    const admintoken=localStorage.getItem("admintoken")
  if(admintoken){
    return children;
  }
  return <Homepage/>
}

export default AdminRoute