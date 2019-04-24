import React from 'react';
import Products from '../components/Products/Products'
import Product from '../components/Product/Product'

import { connect } from 'react-redux';

import { actFetchProductsRequest
,
actDeleteProductRequest,
actToggleStatusRequest
} from '../actions/index';

class ProductsPage extends React.Component {

    componentDidMount(){
        this.props.onFetchProducts();
    }

    onToggleStatus = product => {
        this.props.onToggleStatus(product);
    }
    onDeleteProduct = e => {
        this.props.onDeleteProduct(e);
    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-sm-12">
                <div className="panel panel-success">
                    <div className="panel-heading">List Products</div>
                    <div className="panel-body">
                        <Products>
                            { this.onShowProducts(products) }
                        </Products>
                    </div>
                </div>
            </div>
        );
    }

    onShowProducts = products => {
        var result = null;
        if (products.length > 0){
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                        index={index}
                        onToggleStatus={this.onToggleStatus}
                        onDeleteProduct={this.onDeleteProduct}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id));
        },
        onToggleStatus: (product) => {
            dispatch(actToggleStatusRequest(product));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);

