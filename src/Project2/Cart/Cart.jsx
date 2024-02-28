import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";
import { PRODUCTS } from "../Products";
import { CartItem } from "./CartItems";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          } else {
            return null;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: {totalAmount} $</p>
          <button onClick={() => navigate("/shop")}> Continue Shopping</button>
          <button> Check out</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
};
