import keyBy from 'lodash.keyby';

import { FETCH_FEATURED_SUCCESS, FETCH_BY_CATEGORY_SUCCESS } from './actionTypes';

function byIdReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_BY_CATEGORY_SUCCESS:
            return Object.assign({}, state, keyBy(action.payload.books, 'id'));
        case FETCH_FEATURED_SUCCESS:
            return Object.assign({}, state, keyBy(action.payload.featured, 'id'));
        default:
            return state;
    }
}

const getByIds = (state, bookIds) => bookIds.map(bookId => state[bookId]);

export default byIdReducer;
export {
    getByIds
}
