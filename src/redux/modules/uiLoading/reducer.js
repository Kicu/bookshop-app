import { actionTypes } from '../books';

const defaultState = {
    featured: undefined,
    category: undefined
};

function uiLoadingReducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.FETCH_BY_CATEGORY:
            return Object.assign({}, state, { category: true });
        case actionTypes.FETCH_BY_CATEGORY_SUCCESS:
        case actionTypes.FETCH_BY_CATEGORY_ERROR:
            return Object.assign({}, state, { category: false });
        case actionTypes.FETCH_FEATURED:
            return Object.assign({}, state, { featured: true });
        case actionTypes.FETCH_FEATURED_SUCCESS:
        case actionTypes.FETCH_FEATURED_ERROR:
            return Object.assign({}, state, { featured: false });
        default:
            return state;
    }
}

export default uiLoadingReducer;
