import React from 'react';
import { connect } from 'react-redux';
import { actAddProductRequest, actGetProductWithIdRequest, actUpdateProductRequest } from '../actions/index';
import { Link } from 'react-router-dom';
import './index.css';



class ActionsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            nameProduct: '',
            price: '',
            status: false
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            this.props.getProductWithid(match.params.id);
        }
    }

    componentWillReceiveProps(nextprops) {
        if (nextprops && nextprops.editing) {
            var { id, name, price, status } = nextprops.editing;
            this.setState({
                id, nameProduct: name, price, status
            });
        }
    }
    onChange = e => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        var { id, nameProduct, price, status } = this.state;
        var { history } = this.props;
        if (id) {
            var product = {
                id, name: nameProduct, price, status
            }
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(nameProduct, price, status);
        }
        history.goBack();

    }

    onCancel = e => {
        e.preventDefault();

        this.setState({
            nameProduct: '',
            price: '',
            status: false
        })
    }

    render() {
        var { nameProduct, price, status } = this.state;
        var { isAddSuccess } = this.props;
        var showSuccess = isAddSuccess ? 'show' : 'hide';
        return (
            <div className="col-sm-6">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Product Name"
                            name="nameProduct"
                            value={nameProduct}
                            onChange={this.onChange}

                        />
                        <small className="form-text text-muted">Input Product Name</small>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="text" className="form-control" placeholder="Price"
                            name="price"
                            value={price}
                            onChange={this.onChange} />
                        <small className="form-text text-muted">Input Price</small>
                    </div>
                    <div className="form-check">
                        <input type="checkbox"
                            name="status"
                            value={status}
                            onChange={this.onChange}
                            checked={status}
                        />
                        <label className="form-check-label">Available for Sale</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <button className="btn btn-outline-warning"
                        onClick={this.onCancel}
                    >Cancel</button>
                    <Link to="/products" className="btn btn-outline-infor">Go to List Products</Link>
                    <div className={`alert alert-success ${showSuccess}`} role="alert">
                        Add Product Success
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        isAddSuccess: state.isAddSuccess,
        editing: state.editing,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (name, price, status) => {
            dispatch(actAddProductRequest(name, price, status));
        },
        getProductWithid: (id) => {
            dispatch(actGetProductWithIdRequest(id));
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionsPage);



