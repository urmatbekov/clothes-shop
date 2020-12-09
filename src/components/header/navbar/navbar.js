import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

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
                            <li><NavLink to={"/"}>Home</NavLink>
                            </li>
                            <li><NavLink to={"/register"}>Register</NavLink>
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