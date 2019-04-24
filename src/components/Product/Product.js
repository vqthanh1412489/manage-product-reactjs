import React from 'react';
import './index.css';

import { Link } from 'react-router-dom'

class Product extends React.Component {
    onToggleStatus = e => {
        this.props.onToggleStatus(e);
    }

    onDeleteProduct = e => {
        if (confirm('Are you sure delete this product')) { // eslint-disable-line
            this.props.onDeleteProduct(e);
        }
    }

    render() {
        var { product, index } = this.props;
        var status = product.status ? 'label label-success margin-center' : 'label label-danger margin-center'
        var title = product.status ? 'Con Hang' : 'Het Hang'
        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span
                        onClick={() => this.onToggleStatus(product)}
                        className={`${status} statuss`}>{title}</span>
                </td>
                <td>
                    <Link
                        className="btn btn-outline-info"
                        to={`/product/${product.id}/edit`}
                    >Edit</Link>
                    <button type="button" className="btn btn-outline-danger"
                        onClick={() => this.onDeleteProduct(product.id)}
                    >Delete</button>
                </td>
            </tr>
        );
    }

}

export default Product;


