import React, { useContext } from "react";
import "./css/shopCategory_style.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Offer from "../components/Offer/Offer";
const ShopCategory = (props) => {
	// eslint-disable-next-line
	const { all_product } = useContext(ShopContext);
	return (
		<div className="shopcategory_banner">
			<img src={props.banner} alt="" />
			<div className="shopcategory_indexsort">
				<p><span>Showing 1-12 </span> out of 36 products</p>
				<div className="shopcategory_sort">sort by<img id="drop" src={dropdown_icon} alt="" />
				</div>
			</div>
			<div className="shopcategory_products">
				{all_product.map((item) => {
					if (props.category === item.category) {
						return (
							<Offer
								key={item.id}
								id={item.id}
								name={item.name}
								image={item.image}
							/>
						);
					} else {
						return null;
					}
				})}
			</div>
			<div className="shopcategory_loadmore">Explore More</div>
		</div>
	);
};

export default ShopCategory;
