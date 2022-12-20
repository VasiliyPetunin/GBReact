import { initState } from "../initState";
import * as types from '../types/catFactsTypes';

export const catFactsReducer = (state = initState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.SET_FACTS:
            return [...state, ...payload];

        default:
            return state;
    }
};