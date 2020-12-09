import React, {Component} from 'react';
import TopCategoryItems from "./top-category-items/top-category-items";

class TopCategory extends Component {
    render() {
        return (
            <div className="top_catagory_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row justify-content-center">
                        <TopCategoryItems/>
                        <TopCategoryItems/>
                        <TopCategoryItems/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopCategory;