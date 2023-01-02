import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import * as actions from '../../store/action/chatsAC';
// import { useDispatch } from 'react-redux';
import { chatsRef } from '../../services/firebase';
import { messagesRef } from '../../services/firebase';
import { get, set } from 'firebase/database';

const ChatDeleteForm = (props) => {
    
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // dispatch(actions.deleteChat({
        //     id: props.chatId
        // }));
        let messages = {};
        await get(messagesRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    messages = {...snapshot.val()};
                }
            })
            .catch((error) => {console.log(error)});

        set(chatsRef, props.chats.filter((chat) => chat.id !== props.chatId));

        if (Object.keys(messages).length !== 0) {
            let filteredMessages = [];
            for (const chatId in messages) {
                if (chatId !== 'chatId' + props.chatId) {
                    filteredMessages.push({[chatId]: messages[chatId]});
                }
            };

            let filteredMessagesObj = {};
            for (const messagesObj of filteredMessages) {
                filteredMessagesObj = {...filteredMessagesObj, ...messagesObj};
            };

            set(messagesRef, filteredMessagesObj);
        }

        navigate('/chats');
    };


    return (
        <form onSubmit={handleSubmit} className="chatDeleteForm">
            <Button variant="contained" type="submit">Delete chat</Button>
        </form>
    );
};

export default ChatDeleteForm;