import { Button } from '@mui/material';
// import * as actions from '../../store/action/chatsAC';
// import { useDispatch } from 'react-redux';
import { chatsRef } from '../../services/firebase';
import { set } from 'firebase/database';

const ChatAddForm = (props) => {
    
    // const dispatch = useDispatch();

    const createIdChat = () => Math.round(Math.random() * 99);

    const handleSubmit = (e) => {
        e.preventDefault();

        const createdIdChat = createIdChat();

        // dispatch(actions.setChat({
        //     id: createdIdChat,
        //     name: 'chat' + createdIdChat
        // }));
        
        if (props.chats) {
            set(chatsRef, [...props.chats, {
                id: createdIdChat,
                name: 'chat' + createdIdChat
            }]);
        }   else {
            set(chatsRef, [{
                id: createdIdChat,
                name: 'chat' + createdIdChat
            }]);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="chatAddForm">
            <Button variant="contained" type="submit">Add new chat</Button>
        </form>
    );
};

export default ChatAddForm;