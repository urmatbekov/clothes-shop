import React, {Component} from 'react';
import BrandsItems from "./brands-item/brands-items";

class Brands extends Component {
    render() {
        return (
            <div className="brands-area d-flex align-items-center justify-content-between">
                <BrandsItems/>
                <BrandsItems/>
                <BrandsItems/>
                <BrandsItems/>
                <BrandsItems/>
                <BrandsItems/>
                <BrandsItems/>
            </div>
        );
    }
}

export default Brands;