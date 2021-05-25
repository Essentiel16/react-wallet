import React from 'react'
import './Balance.css'

function Balance() {
  return (
    <div className="welcome-flex m-bottom">
      <div className="funds">
        <h2>₦00.00</h2>
        <p>Naira Balance</p>
      </div>
      <div className="funds">
        <h2>$00.00</h2>
        <p>Dollar Balance</p>
      </div>
    </div>
  )
}

export default Balance
