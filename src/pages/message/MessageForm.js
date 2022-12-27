import React, { useState, useEffect, useRef } from 'react';
import './MessageForm.css';
import Form from '../../components/Form';
// import * as actions from '../../store/action/messagesAC';
// import { useDispatch, useSelector } from 'react-redux';
// import * as selectorsInputMessage from '../../store/selectors/inputsMessages';
import { messagesRef } from '../../services/firebase';
import { set } from 'firebase/database';

const MessageForm = (props) => {
    const [inputsMessage, setInputsMessage] = useState({})
    // const inputs = useSelector(selectorsInputMessage.getInputs);
    // const dispatch = useDispatch();

    const messageTextRef = useRef(null);

    useEffect(() => {
        messageTextRef.current.focus();
      }, []);

    
      const handleChange = (e) => {

        setInputsMessage({...inputsMessage, [e.target.name]: e.target.value})

        // if (e.target.name === 'messageText') {
        //   dispatch(actions.messageTyping({[e.target.name]: e.target.value}));
        // }
        // if (e.target.name === 'messageAuthor') {
        //   dispatch(actions.messageTyping({[e.target.name]: e.target.value}));
        // }
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
       
        // dispatch(actions.setMessage({
        //   message: {
        //     id: Math.round(Math.random() * 99),
        //     text: inputs.messageText,
        //     author: inputs.messageAuthor
        //   }, 
        //   chatId: props.chatId
        // }));

        if (props.messages['chatId' + props.chatId]) {
          set(messagesRef, {...props.messages,
            ['chatId' + props.chatId]: [...props.messages['chatId' + props.chatId], {id: Math.round(Math.random() * 99), text: inputsMessage.messageText, author: inputsMessage.messageAuthor}]}
          );
        } else {
          set(messagesRef, {...props.messages, ['chatId' + props.chatId]: [{id: Math.round(Math.random() * 99), text: inputsMessage.messageText, author: inputsMessage.messageAuthor}]});
        }

        setInputsMessage({});

        // dispatch(actions.setRobotsMessage({
        //   message: {
        //     id: Math.round(Math.random() * 99),
        //     text: 'Robot\'s message',
        //     author: 'Robot'
        //   },
        //   chatId: props.chatId
        // }));
        // dispatch(actions.messageInputClear({}));
      }

    return (
      <>
      <Form onSubmit={handleSubmit}
        classForm={"messageForm"}
        classHeader={'messageFormHeader'}
        inputRef={messageTextRef}
        handleChange={handleChange}
      />
      </>
    );
};

export default MessageForm;