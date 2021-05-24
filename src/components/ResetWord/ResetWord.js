import React from 'react'
import '../SignupForm/SignupForm.css'
import './ResetWord.css'
import inbox from '../../assets/inbox.svg'

function ResetWord() {
  return (
    <div>
      <form className="form">
        <div className="inboxImage">
          <img src={inbox} alt="inbox"/>
        </div>
        <h3 className="inboxDesc"> Check your Inbox</h3>
        <p className="inboxSubdesc">Password reset link has been sent to your inbox</p>
      </form>
    </div>
  )
}

export default ResetWord
