import React, { useEffect, useRef } from 'react';
import './MessageForm.css';
import { TextField, Button } from '@mui/material';

const MessageForm = ({ messageList, setMessageList }) => {
    const messageTextRef = useRef(null);

    useEffect(() => {
        messageTextRef.current.focus();
      }, [])

    useEffect(() => {
        if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {
            messageTextRef.current.focus();
            setTimeout(() => 
            setMessageList([...messageList, {text: 'Robot\'s message', author: 'Robot'}]),
            1500
            )
        }
      }, [messageList, setMessageList]);
    
      let message = {
        text: '',
        author: ''
      };
    
      const handleChange = (e) => {
        if (e.target.id === 'messageText') {
          message.text = e.target.value;
          return;
        }
        if (e.target.id === 'messageAuthor') {
          message.author = e.target.value;
          return;
        }
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!message.text || message.text === 'Enter a text of the message') {
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
        <form onSubmit={handleSubmit} className="messageForm">
            <h1 className='messageFormHeader'>Message Form:</h1>
            <TextField
                id="messageText"
                label="Message"
                defaultValue="Enter a text of the message"
                inputRef={messageTextRef}
                onBlur={handleChange}
                style={{marginTop: '10px', marginBottom: '10px'}}
            />
            <TextField
                id="messageAuthor"
                label="Author"
                defaultValue="Enter an author of the message"
                onBlur={handleChange}
                style={{marginTop: '10px', marginBottom: '10px'}}
            />
            <Button variant="contained" type="submit">Send message</Button>
    </form>
    );
};

export default MessageForm;