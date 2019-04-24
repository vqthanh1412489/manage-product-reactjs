import { SET_ISSUCESS, SET_ISFAIL }
    from '../constants/ActionType';
var initialState = false;

const addSuccessReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ISSUCESS:
            state = action.payload;
            return state;
        default: return state;
    }
};

export default addSuccessReducer;