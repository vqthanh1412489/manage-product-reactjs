import *as Config from '../constants/Config';
import axios from 'axios';

const getAllProducs = () => {
    return axios.get(`${Config.API_URL}/products`)
}
const addProduct = (name, price, status) => {
    return axios.post(`${Config.API_URL}/products`, {name, price, status})
}
const deleteProduct = (id) => {
    return axios.delete(`${Config.API_URL}/products/${id}`)
}
const getProductWithId = (id) => {
    return axios.get(`${Config.API_URL}/products/${id}`)
}
const toggleStatusProduct = (product) => {
    return axios.put(`${Config.API_URL}/products/${product.id}`,
    {
        id: product.id,
        name: product.name,
        status: !product.status,
        price: product.price
    })
}
const updateProduct = (product) => {
    return axios.put(`${Config.API_URL}/products/${product.id}`,
    {
        id: product.id,
        name: product.name,
        status: product.status,
        price: product.price
    })
}

export {
    getAllProducs,
    addProduct,
    deleteProduct,
    toggleStatusProduct,
    getProductWithId,
    updateProduct,
    
}