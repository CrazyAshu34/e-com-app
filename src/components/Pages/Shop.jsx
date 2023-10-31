import React from "react";
import "./shop_style.css";
import Popular_item from "../Popular/Popular";
import Banner1 from "../Banner/Banner1";
const Shop = () => {
    return (
        <div className="myshop">
            {/*1st part */}
            <div className="back_img">
                <div className="container">
                    <p className="news_p1">NEW ARRIVALS ONLY </p>
                    <p className="news_p2">
                        new <br />
                        collections <br /> for everyone{" "}
                    </p>
                    <button className="news_btn">Latest collections ➡</button>
                </div>
            </div>

            {/*second part */}
           <Popular_item/>
           <Banner1/>
        </div>
    );
};

export default Shop;
