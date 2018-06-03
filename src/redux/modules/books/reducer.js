import keyBy from 'lodash.keyby';

import { FETCH_FEATURED_SUCCESS } from '../featured/actionTypes';
import { FETCH_BY_CATEGORY_SUCCESS } from '../byCategory/actionTypes';

function booksReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_BY_CATEGORY_SUCCESS:
            return Object.assign({}, state, keyBy(action.payload.books, 'id'));
        case FETCH_FEATURED_SUCCESS:
            return Object.assign({}, state, keyBy(action.payload.featured, 'id'));
        default:
            return state;
    }
}

const getBooksByIds = (state, bookIds) => bookIds.map(bookId => state.books[bookId]);

export default booksReducer;
export {
    getBooksByIds
}
