import React from 'react'
import './Message.css'

function Message(props) {
  return (
    <>
        <h1>
            Message: {props.greeting}
        </h1>
    </>

 );
}

export default Message;