import React from 'react'
import HomeStructure from '../../components/Layout'
import Login from "../../components/Login"
function userLogin() {
  return (
    <div>
      <HomeStructure title="Log In" subtitle="Great to have you back">
      <Login/>
      </HomeStructure>
    </div>
  )
}

export default userLogin
