import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import "./CartItem.css";

const CartItem = () => {
  const { getTotalCartAmount, all_product, CurrentCartState, removeToCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (CurrentCartState[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems_format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <div className="wrap_class">
                  <p className="product-title">{e.name}</p>
                </div>
                <p className="product-price">${e.new_price}</p>
                <button className="cartitems-quantity">
                  {CurrentCartState[e.id]}
                </button>
                <p className="product-total">
                  ${e.new_price * CurrentCartState[e.id]}
                </p>
                <img
                  className="cartitem-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeToCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      {/* different section here */}
      <div className="cartitems_down">
        <div className="cartitems-total">
          <h1> Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p> Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p> Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p> If you have a Promo Code, Enter it here</p>
          <div className="promobox">
            <input type="text" placeholder=" promo code" />
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
