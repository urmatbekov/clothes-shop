import React, {Component} from 'react';
import NavbarShopCategory from "./navbar-shop-category/navbar-shop-category.";

class Navbar extends Component {
    render() {
        return (
            <nav className="classy-navbar" id="essenceNav">

                <a className="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt=""/></a>

                <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span/><span/><span/></span>
                </div>

                <div className="classy-menu">

                    <div className="classycloseIcon">
                        <div className="cross-wrap"><span className="top"/><span
                            className="bottom"/></div>
                    </div>

                    <div className="classynav">
                        <ul>
                            <li><a href="#">Shop</a>
                                <div className="megamenu">
                                    <NavbarShopCategory/>
                                    <NavbarShopCategory/>
                                    <NavbarShopCategory/>
                                    <div className="single-mega cn-col-4">
                                        <img src="img/bg-img/bg-6.jpg" alt=""/>
                                    </div>
                                </div>
                            </li>
                            <li><a href="#">Pages</a>
                                <ul className="dropdown">
                                    <li><a href="index.html">Home</a></li>
                                    <li><a href="shop.html">Shop</a></li>
                                    <li><a href="single-product-details.html">Product Details</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="single-blog.html">Single Blog</a></li>
                                    <li><a href="regular-page.html">Regular Page</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;