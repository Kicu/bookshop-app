import { createStore, combineReducers } from 'redux';

const helloReducer = (state, action) => {
    return 'helloWorld';
};

const reducer = combineReducers({ hello: helloReducer });

const devtoolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
    const store = createStore(reducer, devtoolsEnhancer);

    return store;
}

export default configureStore;
