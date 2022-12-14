// import React, { useState } from 'react';
import './MessageList.css';
import { useSelector } from 'react-redux';
import { getMessages } from './store/selectors/messagesSelectors';
import MessageForm from './MessageForm';

const MessageList = (props) => {
  const messages = useSelector(getMessages);
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

      <MessageForm chatId={props.chatId} />
    </div>

 );
}



// {messages.map( (messagesItem, index) =>
//   <ul key={messagesItem.id + 'message'} className='message'>
//     <li key={messagesItem.id + 'messageText'}>Message: "{messagesItem.text}"</li>
//     <li key={messagesItem.id + 'author'}>Author: {messagesItem.author}</li>
//   </ul>
// )} 

export default MessageList;
