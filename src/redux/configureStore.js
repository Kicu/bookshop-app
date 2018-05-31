import { createStore, combineReducers } from 'redux';

import featuredReducer from './modules/featured';

const reducer = combineReducers({
    featured: featuredReducer
});

const devtoolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    const store = createStore(reducer, devtoolsEnhancer);

    return store;
}

export default configureStore;
