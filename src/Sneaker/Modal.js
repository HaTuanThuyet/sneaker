import React, { Component } from 'react'

export default class Modal extends Component {
    
    render() {
        let {productDetail} = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{productDetail.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <img src={productDetail.image} alt="..." className="img-fluid" />
                            <p className="card-text">{productDetail.description}</p>
                            <p className="card-text">{productDetail.shortDescription}</p>
                             <p className="card-text">{productDetail.quantity}</p>


                            </div>
                          
                        </div>
                    </div>
                </div>

        )
    }
}
