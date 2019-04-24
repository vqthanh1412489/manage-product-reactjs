import React from 'react';
import { Link } from 'react-router-dom'
import './index.css'

function ButtonAddProduct() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <Link
                    className="btn btn-success btnAddButton"
                    to="/product/add"
                >Add Product</Link>
            </div>
        </div>
    );
}

export default ButtonAddProduct;


