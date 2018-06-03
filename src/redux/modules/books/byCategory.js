import { FETCH_BY_CATEGORY_SUCCESS } from './actionTypes';

function byCategoryReducer(state = [], action) {
    switch (action.type) {
        case FETCH_BY_CATEGORY_SUCCESS:
            return action.payload.books.map(book => book.id);
        default:
            return state;
    }
}

const getByCategory = (state) => state;

export default byCategoryReducer;
export {
    getByCategory
}
