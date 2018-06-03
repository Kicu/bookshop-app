import { combineReducers } from 'redux';
import byIdReducer, { getByIds } from './byId';
import featuredReducer, { getFeatured } from './featured';

const booksReducer = combineReducers({
    featured: featuredReducer,
    byId: byIdReducer
});

const getFeaturedBooks = (state) => {
    const featuredIds = getFeatured(state.books.featured);
    return getBooksByIds(state, featuredIds);
};

const getBooksByIds = (state, bookIds) => getByIds(state.books.byId, bookIds);

export default booksReducer;
export {
    getBooksByIds,
    getFeaturedBooks
}