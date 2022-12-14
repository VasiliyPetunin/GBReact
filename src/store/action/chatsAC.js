import * as types from '../types/chatTypes';

export const setChat = (data) => {
    return {type: types.SET_CHAT, payload: data};
}

export const deleteChat = (data) => {
    return {type: types.DELETE_CHAT, payload: data};
}