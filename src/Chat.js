import React from 'react';
import './Chat.css';
import ChatAddForm from './ChatAddForm';
import ChatDeleteForm from './ChatDeleteForm';
import { Link, useParams, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getChats } from './store/selectors/chatsSelectors';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import MessageList from './MessageList';

const Chat = () => {
    const chats = useSelector(getChats);
    const chatIDObj = useParams();

    return (
        <>
            <div className='chatComponent'>
                <div className='chats'>
                    <h1 className='chatList'>Chat List:</h1>

                    { (chatIDObj.chatID && !chats.length) || (chats.length && chatIDObj.chatID && !chats.filter(chat => chat.id === chatIDObj.chatID)) ? 
                        <Navigate to='/chats' /> :
                        <List>
                            {chats.map( (chatsItem) =>
                                <>
                                    <ListItem key={chatsItem.id}>
                                        <Link to={'/chats/' + chatsItem.id}>
                                            {chatIDObj.chatID && Number(chatIDObj.chatID) === chatsItem.id ? 
                                                "Current chat's name: " + chatsItem.name :
                                                "Chat's name: "  + chatsItem.name
                                            }
                                        </Link>
                                        <ChatDeleteForm chatId={chatsItem.id} />
                                    </ListItem>
                                    <Divider />
                                </>
                            )}
                        </List> 
                    }
                </div>
                <ChatAddForm />
            </div>
            {chatIDObj.chatID ? <MessageList chatId={Number(chatIDObj.chatID)} /> : ''}
        </>
    );
};

export default Chat;