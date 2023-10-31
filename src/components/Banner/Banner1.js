import React from 'react'
import "./Banner1.css"
import girl from "../Assets/exclusive_image.png"

const Banner1 = () => {
    const mygirl = girl;
    return (
        <div className="offers">
            <div className='offer_left'>
                <h1>Exclusive </h1>
                <h1> Offers For You </h1>
                <p> ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check now</button>
            </div>
            <div className='offer_right'>
                <img src={mygirl} alt="mylady" />
            </div>
        </div>
    )
}

export default Banner1;