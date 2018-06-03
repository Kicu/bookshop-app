import { ADD_TO_BASKET, REMOVE_FROM_BASKET, LOAD_BASKET_DATA } from './actionTypes';
import { getBasket } from './reducer';

const basketStoreKey = 'basketState';

const basketStorageMiddleware = storageHelper => store => next => action => {
    switch (action.type) {
        case ADD_TO_BASKET:
        case REMOVE_FROM_BASKET:
            const result = next(action);
            storageHelper.save(basketStoreKey, getBasket(store.getState()));
            return result;
        case LOAD_BASKET_DATA:
            const basketData = storageHelper.get(basketStoreKey);
            if (basketData) {
                action.payload = { basketData }
            }

            return next(action);
        default:
            return next(action)
    }
};

export {
    basketStorageMiddleware
}