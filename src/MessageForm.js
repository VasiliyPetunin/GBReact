import React, { useEffect, useRef } from 'react';
import './MessageForm.css';
import { TextField, Button } from '@mui/material';
import * as actions from './store/action/messagesAC';
import { useDispatch, useSelector } from 'react-redux';
import { getInputs } from './store/selectors/inputsMessages';

const MessageForm = (props) => {
    const inputs = useSelector(getInputs);
    const dispatch = useDispatch();

    const messageTextRef = useRef(null);

    useEffect(() => {
        messageTextRef.current.focus();
      }, [])

    // useEffect(() => {
    //     if (messageList.length && messageList[messageList.length - 1].author !== 'Robot') {
    //         messageTextRef.current.focus();
    //         setTimeout(() => 
    //         setMessageList([...messageList, {text: 'Robot\'s message', author: 'Robot'}]),
    //         1500
    //         )
    //     }
    //   }, [messageList, setMessageList]);
    
      const handleChange = (e) => {
        if (e.target.name === 'messageText') {
          // message.text = e.target.value;
          // return;

          dispatch(actions.messageTyping({[e.target.name]: e.target.value}));

          // dispatch(actions.messageTyping({}))
        }
        if (e.target.name === 'messageAuthor') {
          // message.author = e.target.value;
          // return;

          dispatch(actions.messageTyping({[e.target.name]: e.target.value}));

        }
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
       
        dispatch(actions.setMessage({
          message: {
            id: Math.round(Math.random() * 99),
            text: inputs.messageText,
            author: inputs.messageAuthor
          }, 
          chatId: props.chatId
        }));
        dispatch(actions.messageInputClear({}))
      }

    return (
        <form onSubmit={handleSubmit} className="messageForm">
            <h1 className='messageFormHeader'>Message Form:</h1>
            <TextField
                name="messageText"
                label="Message"
                defaultValue="Enter a text of the message"
                inputRef={messageTextRef}
                onBlur={handleChange}
                style={{marginTop: '10px', marginBottom: '10px'}}
            />
            <TextField
                name="messageAuthor"
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