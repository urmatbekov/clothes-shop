import React, {Component} from 'react';

class TopCategoryItems extends Component {
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4">
                <div
                    className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                    style={{backgroundImage: " url(img/bg-img/bg-2.jpg)"}}>
                    <div className="catagory-content">
                        <a href="#">Clothing</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopCategoryItems;