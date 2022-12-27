import { initState } from "../initState";

export const profileReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'IS_AUTH':
            return {isAuth: payload};

        default:
            return state;
    }
};