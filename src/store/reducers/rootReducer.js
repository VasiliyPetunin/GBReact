import { combineReducers } from "redux";
import { inputMessageReducer } from "./inputMessageReducer";
import { messagesReducer } from './messagesReducer';
import { chatsReducer } from "./chatsReducer";
import { profileReducer } from './profileReducer';
import { catFactsReducer } from './catFactsReducer'


export const rootReducer = combineReducers({
    messageInputs: inputMessageReducer,
    messages: messagesReducer,
    chats: chatsReducer,
    profileCheckbox: profileReducer,
    catFactsApi: catFactsReducer
});