import React, { useState } from 'react';
import './MessageList.css';
import MessageForm from './MessageForm';

const MessageList = () => {
  const [messageList, setMessageList] = useState([]);

  return (
    
    <div className='messageComponent'>
      <div className="messages">
        <h1 className='messageList'>Message List:</h1>
        {messageList.map( (messagesItem, index) =>
          <ul key={index.toString() + 'message'} className='message'>
            <li key={index.toString() + 'messageText'}>Message: "{messagesItem.text}"</li>
            <li key={index.toString() + 'author'}>Author: {messagesItem.author}</li>
          </ul>
        )} 
      </div>

      <MessageForm
        messageList = {messageList}
        setMessageList = {setMessageList}
      />
    </div>

 );
}

export default MessageList;
