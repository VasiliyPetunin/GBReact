import * as types from '../types/messageTypes';

export const setMessage = (data) => {
    return {type: types.SET_MESSAGE, payload: data};
}

export const messageTyping = (data) => {
    return {type: types.MESSAGE_TYPING, payload: data};
}

export const messageInputClear = (data) => {
    return {type: types.MESSAGE_INPUT_CLEAR, payload: data};
}