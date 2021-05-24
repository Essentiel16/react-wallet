import React from 'react'
import HomeStructure from '../../components/Layout'
import ForgotPassword from '../../components/ForgotPassword'

function forgotPassword() {
  return (
    <div>
      <HomeStructure title="Forgot Password" subtitle="Kindly enter your registered email to reset your password">
      <ForgotPassword/>
      </HomeStructure>
    </div>
  )
}

export default forgotPassword
