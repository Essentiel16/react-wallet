import React from 'react'
import HomeStructure from '../../components/Layout'
import ResetPassword from '../../components/ResetPassword'

function resetPassword() {
  return (
    <div>
      <HomeStructure title="Create your account" subtitle="Let's get you started">
      <ResetPassword/>
      </HomeStructure>
    </div>
  )
}

export default resetPassword
