import React, {Component} from 'react';

class NewArrivalsItem extends Component {
    render() {
        return (
            <div className="single-product-wrapper">

                <div className="product-img">
                    <img src="img/product-img/product-1.jpg" alt=""/>

                    <img className="hover-img" src="img/product-img/product-2.jpg" alt=""/>

                    <div className="product-favourite">
                        <a href="#" className="favme fa fa-heart"></a>
                    </div>
                </div>

                <div className="product-description">
                    <span>topshop</span>
                    <a href="single-product-details.html">
                        <h6>Knot Front Mini Dress</h6>
                    </a>
                    <p className="product-price">$80.00</p>


                    <div className="hover-content">

                        <div className="add-to-cart-btn">
                            <a href="#" className="btn essence-btn">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewArrivalsItem;