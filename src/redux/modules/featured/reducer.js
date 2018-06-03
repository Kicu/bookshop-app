import { FETCH_FEATURED_SUCCESS } from './actionTypes';

function featuredReducer(state = [], action) {
    switch (action.type) {
        case FETCH_FEATURED_SUCCESS:
            return action.payload.featured.map(book => book.id);
        default:
            return state;
    }
}

const getFeaturedBooks = (state) => state.featured.map(bookId => state.books[bookId]);

export default featuredReducer;
export {
    getFeaturedBooks
}
