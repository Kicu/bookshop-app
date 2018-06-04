import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import search from './modules/search';
import books from './modules/books';
import basket, { basketStorageMiddleware } from './modules/basket';
import uiLoading from './modules/uiLoading';

import storageHelper from '../helpers/storage';

const reducer = combineReducers({
    search,
    books,
    basket,
    uiLoading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(
    thunk,
    basketStorageMiddleware(storageHelper),
));

function configureStore() {
    const store = createStore(reducer, enhancer);

    return store;
}

export default configureStore;
