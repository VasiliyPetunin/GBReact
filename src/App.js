import './App.css';
import Message from './Message';
import React, { useEffect, useState } from 'react';

const greeting = 'Hello, World!'

function App() {
  const [messageList, setMessageList] = useState([]);
  let message = {
    text: '',
    author: ''
  };

  useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {
      setTimeout(() => 
        setMessageList([...messageList, {text: 'Robot\'s message', author: 'Robot'}]),
        1500
      )
    }
  }, [messageList])

  const handleChange = (e) => {
    if (e.target.dataset.id === 'messageText') {
      message.text = e.target.value;
      return;
    }
    if (e.target.dataset.id === 'messageAuthor') {
      message.author = e.target.value;
      return;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.text) {
      message.text = 'Text of a message';
    }

    if (!message.author) {
      message.author = 'Author of a message';
    }

    setMessageList([...messageList, {text: message.text, author: message.author}]);
    message.text = '';
    message.author = '';
  }

  return (
    <>
    
    <div className='container'>
      <Message greeting = {greeting}/>
    </div>

    <div className="messages">
      <h1 className='messageList'>Message List:</h1>
        {messageList.map( messageOne => (
          <>
            <ul className='message'>
              <li>Message: "{messageOne.text}"</li>
              <li>Author: {messageOne.author}</li>
            </ul>
          </>
        ))} 
    </div>

    <form onSubmit={handleSubmit} className="messageForm">
      <h1 className='messageFormHeader'>Message Form</h1>
      <textarea data-id="messageText" defaultValue="Enter a text of the message" onBlur={handleChange}>
      </textarea>
      <input type="text" data-id="messageAuthor" defaultValue="Enter an author of the message" onBlur={handleChange}></input>
      <input type="submit" value="Send message"></input>
    </form>
    </>
  );
}

export default App;
