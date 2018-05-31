import { createStore, combineReducers } from 'redux';

import featured from './modules/featured';

const reducer = combineReducers({
    featured
});

const devtoolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    const store = createStore(reducer, devtoolsEnhancer);

    return store;
}

export default configureStore;
