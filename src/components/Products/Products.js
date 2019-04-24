import React from 'react';
import './index.css';

class Products extends React.Component {
    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead className="format-thread">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Products;


