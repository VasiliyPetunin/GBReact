import { combineReducers } from "redux";
import { inputMessageReducer } from "./inputMessageReducer";
import { messagesReducer } from './messagesReducer';
import { chatsReducer } from "./chatsReducer";
import { profileReducer } from './profileReducer';


export const rootReducer = combineReducers({
    messageInputs: inputMessageReducer,
    messages: messagesReducer,
    chats: chatsReducer,
    profileCheckbox: profileReducer
});