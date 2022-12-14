import { initState } from '../initState';
import * as types from '../types/messageTypes';

export const messagesReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.SET_MESSAGE:
            if (state['chatId' + payload.chatId]) {
                return {['chatId' + payload.chatId]: [...state['chatId' + payload.chatId], {...payload.message}]}
            }   else {
                return {['chatId' + payload.chatId]: [{...payload.message}]}
            }

        default:
            return state;
    }
};