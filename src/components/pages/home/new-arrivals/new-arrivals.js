import React, {Component} from 'react';
import NewArrivalsItem from "./new-arrivals-item/new-arrivals-item";
import Service from "../../../service";
import {connect} from "react-redux";
import {getProduct} from "../../../reduce/list-product-popular";
import OwlCarousel from 'react-owl-carousel2';


const service = new Service()

class NewArrivals extends Component {

    componentDidMount() {
        this.props.getProduct()
    }

    render() {
        const {data: {results}, loading} = this.props.productPopular
        if (loading) {
            return <p>Loading</p>
        }
        const options = {
            items: 4,
            margin: 30,
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        };
        return (
            <section className="new_arrivals_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Popular Products</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <OwlCarousel ref="car" className="popular-products-slides owl-carousel" options={options}>

                                {results.map((item)=>
                                    <NewArrivalsItem key={item.id} item={item}/>
                                )}
                                {/*<NewArrivalsItem/>*/}
                                {/*<NewArrivalsItem/>*/}
                                {/*<NewArrivalsItem/>*/}
                                {/*<NewArrivalsItem/>*/}

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({productPopular}) => {
    return {productPopular}
}

const mapActionsToProps = (dispatch) => {
    return {
        getProduct: () => {
            getProduct(service, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapActionsToProps)(NewArrivals);