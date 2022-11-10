import React, { useState, useEffect } from 'react';
import './Chat.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Chat = () => {
    const [chatList, setChatList]  = useState([]);

    useEffect(() => {
        setChatList([
            {id: 'user1ToUser2', name: 'Chat1'},
            {id: 'user1ToUser3', name: 'Chat2'},
            {id: 'user1ToUser4', name: 'Chat3'},
            {id: 'user2ToUser3', name: 'Chat4'},
            {id: 'user2ToUser4', name: 'Chat5'},
            {id: 'user3ToUser4', name: 'Chat6'}
        ]);
    }, []);

    return (
        <div className='chats'>
            <h1 className='chatList'>Chat List:</h1>
            <List>
                {chatList.map( (chatsItem) =>
                    <>
                        <ListItem key={chatsItem.id}>
                            <ListItemButton>
                                <ListItemText primary={`Chat's name: "${chatsItem.name}"`} />
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                    </>
                )}
            </List>
        </div>
    );
};

export default Chat;