import { Button } from '@mui/material';
import * as actions from './store/action/chatsAC';
import { useDispatch } from 'react-redux';

const ChatAddForm = () => {
    
    const dispatch = useDispatch();

    const createIdChat = () => Math.round(Math.random() * 99);

    const handleSubmit = (e) => {
        e.preventDefault();

        const createdIdChat = createIdChat();
        dispatch(actions.setChat({
            id: createdIdChat,
            name: 'chat' + createdIdChat
        }));
    };


    return (
        <form onSubmit={handleSubmit} className="chatAddForm">
            <Button variant="contained" type="submit">Add new chat</Button>
        </form>
    );
};

export default ChatAddForm;