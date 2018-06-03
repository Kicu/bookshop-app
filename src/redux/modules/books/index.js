import reducer, { getBooksByIds, getFeaturedBooks } from './reducer';
import { fetchFeatured } from '../books/actions';

export default reducer;
export {
    fetchFeatured,
    getBooksByIds,
    getFeaturedBooks
}
