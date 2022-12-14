import { Button } from '@mui/material';
import * as actions from './store/action/chatsAC';
import { useDispatch } from 'react-redux';

const ChatDeleteForm = (props) => {
    
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(actions.deleteChat({
            id: props.chatId
        }));
    };


    return (
        <form onSubmit={handleSubmit} className="chatDeleteForm">
            <Button variant="contained" type="submit">Delete chat</Button>
        </form>
    );
};

export default ChatDeleteForm;