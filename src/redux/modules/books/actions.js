import { FETCH_FEATURED, FETCH_FEATURED_SUCCESS, FETCH_FEATURED_ERROR } from './actionTypes';

import fakeApi from '../../../backend/fakeApi';

function fetchFeatured() {
    return (dispatch) => {
        dispatch({ type: FETCH_FEATURED });

        fakeApi.getFeaturedBooks()
            .then(featured => {
                dispatch({ type: FETCH_FEATURED_SUCCESS, payload: { featured } })
            })
            .catch(err => {
                dispatch({ type: FETCH_FEATURED_ERROR, payload: { err } })
            })
    }
}

export {
    fetchFeatured
}