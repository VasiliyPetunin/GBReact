import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initState } from './initState';
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['catFactsApi']
}

export const store = createStore(
    persistReducer(persistConfig, rootReducer),
    initState,
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);