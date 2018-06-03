import { FETCH_FEATURED_SUCCESS } from './actionTypes';

function featuredReducer(state = [], action) {
    if (!action.payload) {
        return state;
    }
    switch (action.type) {
        case FETCH_FEATURED_SUCCESS:
            return action.payload.featured.map(book => book.id);
        default:
            return state;
    }
}

const getFeatured = state => state;

export default featuredReducer;
export {
    getFeatured
}
