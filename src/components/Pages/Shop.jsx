import React from "react";
import "./shop_style.css";
import Popular from "../Popular/Popular";
import Banner1 from "../Banner/Banner1";
import Popular2 from "../Popular2/Popular2"
import NewsLetter from "../NewsLetter/NewsLetter"
import Footer from '../Footer/Footer'
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
           <Popular/>
           <Banner1/>
           <Popular2/>
           <NewsLetter/>
           <Footer/>
        </div>
    );
};

export default Shop;
