import React, {Component} from 'react';

class NewArrivalsItem extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="single-product-wrapper">

                <div className="product-img">

                        <img src={item.images[0].original} alt=""/>


                    {item.images[1] && <img className="hover-img" src={item.images[1].original} alt=""/>}

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