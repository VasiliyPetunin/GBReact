// import React, { useState } from 'react';
import './MessageList.css';
import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import * as selectors from '../../store/selectors/messagesSelectors';
import MessageForm from './MessageForm';
import { messagesRef } from '../../services/firebase';
import { onValue } from 'firebase/database';

const MessageList = (props) => {
  // const messages = useSelector(selectors.getMessages);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setMessages({...data});
      }
    })
  }, [])

  return (
    
    <div className='messageComponent'>
      <div className="messages">
        <h1 className='messageList'>Message List:</h1>
        {Object.entries(messages).map(([chatId, messagesArray]) => {
          if (chatId === 'chatId' + props.chatId) {
            return (messagesArray.map((message) =>
              <ul key={message.id + 'message'} className='message'>
                <li key={message.id + 'messageText'}>Message: "{message.text}"</li>
                <li key={message.id + 'author'}>Author: {message.author}</li>
              </ul>
            ))
          }
        })}
      </div>

      <MessageForm chatId={props.chatId} messages={messages}/>
    </div>

 );
}

export default MessageList;
