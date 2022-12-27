import { initState } from "../initState";
import * as types from '../types/chatTypes';

export const chatsReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.SET_CHAT:
            return [...state, {...payload}];

        case types.DELETE_CHAT:
            return state.filter(item => item.id !== payload.id)

        default:
            return state;
    }
};