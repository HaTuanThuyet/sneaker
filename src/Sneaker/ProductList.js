import React, { Component } from 'react'
import ProductSneaker from './ProductSneaker';

export default class ProductList extends Component {
    renderSneakerList = () => {
        let { xemChitiet, arraySneaker } = this.props;
        return arraySneaker.map((sneaker, index) => {
            return <div className="col-3" key={index}>
                <ProductSneaker sp={sneaker} xem={xemChitiet} />


            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderSneakerList()}
            </div>
        )
    }
}
