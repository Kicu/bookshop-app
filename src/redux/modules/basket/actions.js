import { ADD_TO_BASKET, REMOVE_FROM_BASKET, LOAD_BASKET_DATA } from './actionTypes';

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

function loadBasketData() {
    return {
        type: LOAD_BASKET_DATA
    }
}

export {
    addToBasket,
    removeFromBasket,
    loadBasketData
}