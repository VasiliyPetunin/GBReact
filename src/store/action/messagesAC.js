import * as types from '../types/messageTypes';

export const setMessage = (data) => {
    return {type: types.SET_MESSAGE, payload: data};
}

// TODO 1) Дописать deleteMessages

export const messageTyping = (data) => {
    return {type: types.MESSAGE_TYPING, payload: data};
}

export const messageInputClear = (data) => {
    return {type: types.MESSAGE_INPUT_CLEAR, payload: data};
}

export const setRobotsMessage = (data) => (dispatch) => {
    console.log('middleware', data);
    setTimeout(() => {
        dispatch(setMessage(data));
        console.log('middleware1', data);
    }, 1500)
}