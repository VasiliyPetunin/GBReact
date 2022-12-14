import { createStore } from 'redux';
import { initState } from './initState';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
    rootReducer,
    initState,
    composeWithDevTools()
);