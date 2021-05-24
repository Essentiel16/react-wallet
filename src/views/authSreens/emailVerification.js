import React from 'react'
import HomeStructure from '../../components/Layout'
import Otp from '../../components/OTP'

function emailVerification() {
  return (
    <div>
      <HomeStructure title="OTP Verification" subtitle="A code has been sent to your mail">
      <Otp/>
      </HomeStructure>
    </div>
  )
}

export default emailVerification
