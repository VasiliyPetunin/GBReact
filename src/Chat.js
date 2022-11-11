import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Link, useNavigate, useParams } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import MessageList from './MessageList';

const Chat = () => {
    const [chatList, setChatList]  = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setChatList([
            {id: 'user1ToUser2', name: 'Chat1', messages: [{text: 'Hello World', author: 'User1'}]},
            {id: 'user1ToUser3', name: 'Chat2'},
            {id: 'user1ToUser4', name: 'Chat3'},
            {id: 'user2ToUser3', name: 'Chat4'},
            {id: 'user2ToUser4', name: 'Chat5'},
            {id: 'user3ToUser4', name: 'Chat6'}
        ]);
    }, []);

    // const checkChatId = (chatID) => {
    //     let bool = false;
    //     for (const chatsItem of chatList) {
    //         if (chatsItem.id === chatID) {
    //             bool = true;
    //         }
    //     }
    //     // if (!bool) {
    //     //     navigate('/chats');
    //     // }
    //     return bool;
    // }

    const chatIDObj = useParams();
    // chatID.chatID ? console.log(true) : console.log(false);

    return (
        <>
            <div className='chatComponent'>
                <div className='chats'>
                    <h1 className='chatList'>Chat List:</h1>
                    {/* {checkChatId(chatIDObj.chatID) ?  */}
                    <List>
                        {chatList.map( (chatsItem) =>
                            <>
                                <ListItem key={chatsItem.id}>
                                    <Link to={'/chats/' + chatsItem.id}>
                                        {chatIDObj.chatID && chatIDObj.chatID === chatsItem.id ? `Current chat's name: "${chatsItem.name}"` : `Chat's name: "${chatsItem.name}"`}
                                    </Link>
                                </ListItem>
                                <Divider />
                            </>
                        )}
                    </List>
                    {/* : navigate('/chats') } */}
                </div>
            </div>
            <MessageList />
        </>
    );
};

export default Chat;