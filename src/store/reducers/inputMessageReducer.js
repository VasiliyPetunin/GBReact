import { initState } from "../initState";
import * as types from '../types/messageTypes';

export const inputMessageReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.MESSAGE_TYPING:
            return {...state, messageInputs: {...state.messageInputs, ...payload}};

        case types.MESSAGE_INPUT_CLEAR:
            return {...state, messageInputs: payload};

        default:
            return state;
    }
};