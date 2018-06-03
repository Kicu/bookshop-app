import { ADD_TO_BASKET, REMOVE_FROM_BASKET, LOAD_BASKET_DATA } from './actionTypes';

function basketReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_BASKET: {
            const { bookId } = action.payload;
            const bookIndex = state.findIndex(basketItem => basketItem.bookId === bookId);
            if (bookIndex > -1) {
                const book = {
                    bookId: state[bookIndex].bookId,
                    quantity: state[bookIndex].quantity + 1
                };

                return [
                    ...state.slice(0, bookIndex),
                    book,
                    ...state.slice(bookIndex + 1)
                ];
            }

            return [...state, { bookId, quantity: 1 }];
        }
        case REMOVE_FROM_BASKET:
            const { bookId } = action.payload;
            const bookIndex = state.findIndex(basketItem => basketItem.bookId === bookId);
            if (bookIndex > -1) {
                return [
                    ...state.slice(0, bookIndex),
                    ...state.slice(bookIndex + 1)
                ]
            }

            return state;
        case LOAD_BASKET_DATA:
            if (action.payload && action.payload.basketData) {
                return action.payload.basketData;
            }

            return state;
        default:
            return state;
    }
}

const getBasket = (state) => state.basket;

export default basketReducer;
export {
    getBasket
}