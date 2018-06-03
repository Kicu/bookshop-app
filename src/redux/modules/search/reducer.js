import { SEARCH_SUCCESS } from './actionTypes';

function searchReducer(state = [], action) {
    switch (action.type) {
        case SEARCH_SUCCESS:
            return action.payload.books;
        default:
            return state;
    }
}

const getSearchResults = (state) => state.search;

export default searchReducer;
export {
    getSearchResults
}