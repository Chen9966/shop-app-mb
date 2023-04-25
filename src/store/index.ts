import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import reducers from './reducers';

const persistConfig = {
    key: 'history',
    storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export  { store, persistor }