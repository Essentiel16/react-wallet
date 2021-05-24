import React from 'react'
import HomeStructure from '../../components/Layout'
import SignupForm from '../../components/SignupForm'

function userSignup() {
  return (
    <div>
      <HomeStructure title="Create your account" subtitle="Let's get you started">
      <SignupForm/>
      </HomeStructure>
    </div>
  )
}

export default userSignup
