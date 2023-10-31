import React from 'react';
import "./offer_style.css";
// ChildComponent of Popular_Item  ..........
// It's like a Picture cart
const Offer = (props) => {
  return (
    <div>
      <div className="item">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item_price">
            <div className="new_price">{props.new_price}</div>
            <div className="old_price">{props.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

