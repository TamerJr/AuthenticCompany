import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import userContext from '../../Contexts/AuthContext'

const ProtectedRoute = ({children}) => {
    const {user}=useContext(userContext)
    if(!user){
        return <Navigate to="/" />
    }
  return children;
}

export default ProtectedRoute