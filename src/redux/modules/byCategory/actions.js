import { FETCH_BY_CATEGORY, FETCH_BY_CATEGORY_ERROR, FETCH_BY_CATEGORY_SUCCESS } from './actionTypes';

import fakeApi from '../../../backend/fakeApi';

function fetchByCategory(category) {
    return (dispatch) => {
        dispatch({ type: FETCH_BY_CATEGORY });

        fakeApi.getBooksByCategory(category)
            .then(books => {
                dispatch({ type: FETCH_BY_CATEGORY_SUCCESS, payload: { books } })
            })
            .catch(err => {
                dispatch({ type: FETCH_BY_CATEGORY_ERROR, payload: { err } })
            })
    }
}

export {
    fetchByCategory
}