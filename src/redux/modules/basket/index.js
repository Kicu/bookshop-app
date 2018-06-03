import reducer, { getBasket } from './reducer';
import { addToBasket, removeFromBasket, loadBasketData } from './actions';
import { basketStorageMiddleware } from './middleware';

export default reducer;
export {
    addToBasket,
    removeFromBasket,
    loadBasketData,
    getBasket,
    basketStorageMiddleware
}