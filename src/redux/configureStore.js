import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import featured from './modules/featured';
import byCategory from './modules/byCategory';

const reducer = combineReducers({
    featured,
    byCategory
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

function configureStore() {
    const store = createStore(reducer, enhancer);

    return store;
}

export default configureStore;
