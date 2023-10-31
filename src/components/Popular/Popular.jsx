import "./Popular_style.css";
import data from "../Assets/data";
import Offer from "../Offer/Offer";
// Parent of Offer Component
const Popular_item = () => {
	return (<div>
		<div className="mycontainer">
			<div className="popular">
				<h1>POPULAR IN WOMEN</h1>
				<hr />
				<div className="popular-item">
					{data.map((product) => {
						return (
							<Offer
								key={product.id}
								id={product.id}
								name={product.name}
								image={product.image}
								new_price={product.new_price}
								old_price={product.old_price}
							/>
						);
					})}
				</div>
			</div>
		</div>
	</div>);
};

export default Popular_item;
