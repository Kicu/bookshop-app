import featuredActionTypes from './actionTypes';

function featuredReducer(state = [], action) {
    switch (action.type) {
        case featuredActionTypes.FETCH_FEATURED_SUCCESS:
            return action.payload.featured;
        default:
            return state;
    }
}

export default featuredReducer;
