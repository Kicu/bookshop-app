import { FETCH_BY_CATEGORY_SUCCESS } from './actionTypes';

function byCategoryReducer(state = [], action) {
    switch (action.type) {
        case FETCH_BY_CATEGORY_SUCCESS:
            return action.payload.books;
        default:
            return state;
    }
}

export default byCategoryReducer;
