import React from 'react'

function Message(props) {
  return (
    <div>
      <h1 className="title">{props.title}</h1>
          <p className="subTitle">{props.subtitle}</p>
    </div>
  )
}

export default Message
