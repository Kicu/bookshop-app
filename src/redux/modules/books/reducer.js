import { combineReducers } from 'redux';
import byIdReducer, { getByIds } from './byId';
import featuredReducer, { getFeatured } from './featured';
import byCategoryReducer, { getByCategory } from './byCategory'

const booksReducer = combineReducers({
    featured: featuredReducer,
    byCategory: byCategoryReducer,
    byId: byIdReducer
});

const getFeaturedBooks = (state) => {
    const featuredIds = getFeatured(state.books.featured);
    return getBooksByIds(state, featuredIds);
};

const getBooksByCategory = (state, category) => {
    const byCategoryIds = getByCategory(state.books.byCategory);
    return getBooksByIds(state, byCategoryIds);
};

const getBooksByIds = (state, bookIds) => getByIds(state.books.byId, bookIds);

export default booksReducer;
export {
    getBooksByIds,
    getFeaturedBooks,
    getBooksByCategory
}