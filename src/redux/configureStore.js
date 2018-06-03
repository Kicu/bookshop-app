import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import featured from './modules/featured';
import byCategory from './modules/byCategory';
import search from './modules/search';
import books from './modules/books';

const reducer = combineReducers({
    featured,
    byCategory,
    search,
    books
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

function configureStore() {
    const store = createStore(reducer, enhancer);

    return store;
}

export default configureStore;
