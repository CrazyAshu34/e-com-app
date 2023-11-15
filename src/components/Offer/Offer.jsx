import React from "react";
import "./offer_style.css";
import {Link} from "react-router-dom"
// ChildComponent of Popular_Item  ..........
const Offer = (props) => {
  return (
    <div> 
      <div className="item">
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
        </Link>
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
