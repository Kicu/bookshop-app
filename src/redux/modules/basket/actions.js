import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from './actionTypes';

function addToBasket(bookId) {
    return {
        type: ADD_TO_BASKET,
        payload: { bookId }
    }
}

function removeFromBasket(bookId) {
    return {
        type: REMOVE_FROM_BASKET,
        payload: { bookId }
    }
}

export {
    addToBasket,
    removeFromBasket
}