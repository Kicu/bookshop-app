import { SEARCH, SEARCH_SUCCESS, SEARCH_ERROR } from './actionTypes';

import fakeApi from '../../../backend/fakeApi';

function searchBooks(searchTerm) {
    return (dispatch) => {
        dispatch({ type: SEARCH });

        fakeApi.searchByAuthorTitle(searchTerm)
            .then(books => {
                dispatch({ type: SEARCH_SUCCESS, payload: { books } })
            })
            .catch(err => {
                dispatch({ type: SEARCH_ERROR, payload: { err } })
            })
    }
}

export {
    searchBooks
}