import "./NewsLetter.css";
import React from "react";
const NewsLetter = () => {
	return (
			<div className="newsletter">
				<h1>Get Exclusive Offers On Your Email</h1>
				<p>Subscribe to our NewsLetter and stay updated</p>
				<div>
					<input type="text" placeholder="Your email Id" />
					<button>Subscribe</button>
				</div>
			</div>
	);
};

export default NewsLetter; 
  