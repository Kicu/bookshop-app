import reducer, { getBooksByIds, getBookById, getFeaturedBooks, getBooksByCategory } from './reducer';
import { fetchFeatured, fetchByCategory } from '../books/actions';
import * as actionTypes from './actionTypes';

export default reducer;
export {
    fetchFeatured,
    fetchByCategory,
    getBooksByIds,
    getBookById,
    getFeaturedBooks,
    getBooksByCategory,
    actionTypes
}
