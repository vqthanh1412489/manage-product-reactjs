/* eslint-disable no-restricted-globals */
import {
    FETCH_PRODUCT, ADD_PRODUCT, TOGGLE_STATUS, DELETE_PRODUCT, UPDATE_PRODUCT,
}
    from '../constants/ActionType';
var initialState = [];

const productsReducer = (state = initialState, action) => {
    var index;
    switch (action.type) {
        case FETCH_PRODUCT:
            state = action.payload;
            return [...state]
        case ADD_PRODUCT:
            var product = action.payload;
            state.push(product);
            return [...state];
        case TOGGLE_STATUS:
            index = findIndexById(action.payload.id, state);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
            }
            return [...state];
        case DELETE_PRODUCT:
            index = findIndexById(action.payload, state);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case UPDATE_PRODUCT:
            index = findIndexById(action.payload, state);
            
                state[index] = action.payload;
            
            return [...state];
        default: return [...state];
    }
};

function findIndexById(id, products) {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    })
    return result;
}

export default productsReducer;