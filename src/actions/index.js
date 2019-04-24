import {
    FETCH_PRODUCT, ADD_PRODUCT, SET_ISSUCESS, TOGGLE_STATUS, DELETE_PRODUCT, SET_PRODUCT_EDITING, UPDATE_PRODUCT
} from '../constants/ActionType';

import {
    getAllProducs,
    addProduct,
    deleteProduct,
    toggleStatusProduct,
    getProductWithId,
    updateProduct,

} from '../services/ProductServices';


export const actFetchProductsRequest = () => {
    return dispatch => {
        return getAllProducs()
            .then(res => {
                if (!res.data.err) {
                    dispatch(actFetchProducts(res.data));
                } else {
                    alert(res.data.err);
                }

            })
            .catch(err => console.log(err));
    };
}

export const actFetchProducts = (products) => {
    return {
        type: FETCH_PRODUCT,
        payload: products
    }
}
export const actAddProductRequest = (name, price, status) => {
    return dispatch => {
        return addProduct(name, price, status)
            .then(res => {
                if (!res.data.err) {
                    dispatch(actAddProduct(res.data));
                    dispatch(actSetIsSuccess(true));
                } else {
                    dispatch(actSetIsSuccess(false));                    
                }

            })
            .catch(err => console.log(err));
    };
}

export const actAddProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
export const actSetIsSuccess = (value) => {
    return {
        type: SET_ISSUCESS,
        payload: value
    }
}

export const actToggleStatusRequest = (product) => {
    return dispatch => {
        return toggleStatusProduct(product)
            .then(res => {
                if (!res.data.err) {
                    dispatch(actToggleStatus(res.data));
                } else {
                    alert(res.data.err);
                }

            })
            .catch(err => console.log(err));
    };
}

export const actToggleStatus = (product) => {
    return {
        type: TOGGLE_STATUS,
        payload: product
    }
}

export const actDeleteProductRequest = (id) => {
    return dispatch => {
        return deleteProduct(id)
            .then(res => {
                if (!res.data.err) {
                    dispatch(actDeleteProduct(res.data.id));
                } else {
                    alert(res.data.err);
                }

            })
            .catch(err => console.log(err));
    };
}

export const actDeleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}


export const actGetProductWithIdRequest = (id) => {
    return dispatch => {
        return getProductWithId(id)
            .then(res => {
                if (!res.data.err) {
                    dispatch(actEditingProduct(res.data));
                } else {
                    alert(res.data.err);
                }

            })
            .catch(err => console.log(err));
    };
}

export const actEditingProduct = (product) => {
    return {
        type: SET_PRODUCT_EDITING,
        payload: product
    }
}
export const actUpdateProductRequest = (product) => {
    return dispatch => {
        return updateProduct(product)
            .then(res => {
                if (!res.data.err) {
                    dispatch(actUpdateProduct(res.data));
                } else {
                    alert(res.data.err);
                }

            })
            .catch(err => console.log(err));
    };
}

export const actUpdateProduct = (product) => {
    return {
        type: UPDATE_PRODUCT,
        payload: product
    }
}