import React, {Component} from 'react';
import WelcomArea from "./welcom-area/welcom-area";
import TopCategory from "./top-category/top-category";
import NewArrivals from "./new-arrivals/new-arrivals";
import Brands from "./brands/brands";

class Home extends Component {
    render() {
        return (
            <div>
                <WelcomArea/>
                <TopCategory/>
                <NewArrivals/>
                <Brands/>
            </div>
        );
    }
}

export default Home;