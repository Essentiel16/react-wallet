import React from 'react'
import HomeStructure from '../../components/Layout'
import ResetWord from '../../components/ResetWord'

function resetWaiting() {
  return (
    <div>
      <HomeStructure title="Reset Password" subtitle="We have sent a reset link to your registered email address">
      <ResetWord/>
      </HomeStructure>
    </div>
  )
}

export default resetWaiting
