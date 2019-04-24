import { SET_PRODUCT_EDITING }
    from '../constants/ActionType';
var initialState = {
    id: '',
    name: '',
    price: '',
    status: false
}

const editingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT_EDITING:
            state = action.payload;
            return {...state};
        default: return {...state};
    }
};

export default editingReducer;