import { initState } from '../initState';
import * as types from '../types/messageTypes';

export const messagesReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.SET_MESSAGE:

            if (state['chatId' + payload.chatId]) {
                return {...state,
                    ['chatId' + payload.chatId]: [...state['chatId' + payload.chatId], {...payload.message}]}
            }   else {
                return {...state, ['chatId' + payload.chatId]: [{...payload.message}]}
            }

            // TODO 1) Дописать кейс DELETE_MESSAGES(срабатывает после удаления чата)

        default:
            return state;
    }
};