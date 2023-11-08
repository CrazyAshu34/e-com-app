import React from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
	const { product } = props;
	// if (!product || !product.image || !product.name) {
	//   return null; // or handle the missing data accordingly
	// }

	return (
		<div className="productdisplay">
			<div className="productdisplay_left">
				<div className="productdisplay_img_list">
					<img className="product_image" src={product.image} alt="" />
					<img className="product_image" src={product.image} alt="" />
					<img className="product_image" src={product.image} alt="" />
					<img className="product_image" src={product.image} alt="" />
				</div>
				<div className="productdisplay_img">
					<img
						className="productdisplay_main_img"
						src={product.image}
						alt=""
					/>
				</div>
			</div>
			<div className="productdisplay_right">
				<h1>{product.name}</h1>
				<div className="productdisplay_right_stars">
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_dull_icon} alt="" />
					<p>(122)</p>
				</div>
				<div className="productdisplay_right_prices">
					<div className="productdisplay_right_price_old">
						${product.old_price}
					</div>
					<div className="productdisplay_right_price_new">
						${product.new_price}
					</div>
				</div>
				<div className="productdisplay_right_discription">
					A lightweight, usually kitted, opullover shirt,
					close-fitting and with a round neckling and short sleeves,
					worn as an undreshirt or outer garment.
				</div>
				<div className="productdisplay_right_size">
					<h1>Select Size</h1>
					<div className="productdisplay_right_sizes">
						<div>S</div>
						<div>M</div>
						<div>L</div>
						<div>XL</div>
						<div>XXL</div>
					</div>
				</div>
				<button>ADD TO CART</button>
				<p className="productdisplay_right_category">
					<span>Category :</span>Women, t-shirt, crop-top
				</p>
				<p className="productdisplay_right_category">
					<span>Tags :</span>Modern, Latest
				</p>
			</div>
		</div>
	);
};

export default ProductDisplay;