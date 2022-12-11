import { initState } from "../initState";

export const profileReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'STATE_CHECKBOX':
            return {...state, STATE_CHECKBOX: payload};

        default:
            return state;
    }
};