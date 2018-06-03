import { FETCH_FEATURED_SUCCESS } from './actionTypes';

function featuredReducer(state = [], action) {
    switch (action.type) {
        case FETCH_FEATURED_SUCCESS:
            return action.payload.featured;
        default:
            return state;
    }
}

const getFeaturedBooks = (state) => state.featured;

export default featuredReducer;
export {
    getFeaturedBooks
}
