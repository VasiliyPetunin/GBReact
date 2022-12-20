import * as types from '../types/profileTypes';

export const stateCheckbox = (data) => {
    return {type: types.SET_CHECKBOX, payload: data};
}