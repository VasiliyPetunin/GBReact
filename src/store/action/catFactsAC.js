import * as types from '../types/catFactsTypes';

export const setFacts = (data) => {
    return {type: types.SET_FACTS, payload: data};
}

export const getCatFacts = (setValue) => async (dispatch) => {
    setValue(true);
    await fetch('https://meowfacts.herokuapp.com/?count=5')
        .then((response) => {
            console.log(response);
            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data.data);
            dispatch(setFacts(data.data))
        })
        .catch((error) => console.log(error))
        .finally(() => setValue(false));
}
