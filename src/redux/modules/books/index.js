import reducer, { getBooksByIds, getFeaturedBooks, getBooksByCategory } from './reducer';
import { fetchFeatured, fetchByCategory } from '../books/actions';

export default reducer;
export {
    fetchFeatured,
    fetchByCategory,
    getBooksByIds,
    getFeaturedBooks,
    getBooksByCategory
}
