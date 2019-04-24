import { combineReducers } from 'redux';
import products from './productsReducer';
import isAddSuccess from './isAddSuccess';
import editing from './productEditing';

const appReducers = combineReducers({
    products,
    isAddSuccess,
    editing
});

export default appReducers;