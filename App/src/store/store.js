import { createStore } from 'redux';
import { initState } from './initState';
import { profileReducer } from './reducers/profileReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    profileReducer,
    initState,
    composeWithDevTools()
);