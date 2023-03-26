import React, { useContext } from 'react'
import userContext from '../../Contexts/AuthContext'

const Home = () => {
  const {user}=useContext(userContext)
  console.log(user)
  return (
    <div>Home</div>
  )
}

export default Home