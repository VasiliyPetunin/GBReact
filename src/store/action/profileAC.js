import * as types from '../types/profileTypes';

export const isAuth = (data) => {
    return {type: types.IS_AUTH, payload: data};
}