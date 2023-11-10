import React from "react";
import "./Breadcrums.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
	const { product } = props;
	// you can also write like this const product = props.product;
	// if (!product || !product.category || !product.name) {
	//   return null; // or handle the missing data accordingly
	// }
	return (
		<div className="Breadcrums">
			Home <img src={arrow_icon} alt="" /> SHOP{" "}
			<img src={arrow_icon} alt="" /> {product.category}{" "}
			<img src={arrow_icon} alt="" /> {product.name}
		</div>
	);
};

export default Breadcrums;
 