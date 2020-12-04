import React, {Component} from 'react';

class WelcomArea extends Component {
    render() {
        return (
            <section className="welcome_area bg-img background-overlay"
                     style={{backgroundImage: "url(img/bg-img/bg-1.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="hero-content">
                                <h6>asoss</h6>
                                <h2>New Collection</h2>
                                <a href="#" className="btn essence-btn">view collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WelcomArea;