//ShopCategory.jsx file
import { useContext } from "react";
import "./css/shopCategory_style.css";
import dropdown_icon from "../components/Assets/dropdown_icon.png";
import Offer from "../components/Offer/Offer";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
	// eslint-disable-next-line
	const { all_product } = useContext(ShopContext);

	return (
		<div className="shopcategory_banner">
			<img src={props.banner} alt="" />
			<div className="shopcategory_indexsort">
				<p>
					<span>Showing 1-12 </span> out of 36 products
				</p>
				<div className="shopcategory_sort">
					sort by
					<img id="drop" src={dropdown_icon} alt="" />
				</div>
			</div>
			<div className="shopcategory_products">
				{all_product.map((item) => {
					if (props.category === item.category) {
					return	<Offer
							key={item.id}
							id={item.id}
							image={item.image}
							name={item.name}
							old_price={item.old_price}
							new_price={item.new_price}
						/>;
					}
				})}
			</div>
			<div className="shopcategory_loadmore">Explore More</div>
		</div>
	);
};

export default ShopCategory;
