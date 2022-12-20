import { initState } from "../initState";

export const profileReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'SET_CHECKBOX':
            return payload;

        default:
            return state;
    }
};