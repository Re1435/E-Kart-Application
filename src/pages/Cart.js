import React from "react";
import { useCart } from "../context/CartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EmptyCart from "../assets/images/emptyCart-Img.png";
import "../styles/Cart.css";

const Cart = () => {
  const { cartItems, removeItem } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const discountPrice = totalPrice > 500 ? totalPrice * 0.1 : 0;
  return (
    <div className='cart'>
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className='cart-section'>
          <div className='cart-products'>
            {cartItems.map((item) => (
              <div className='cart-item' key={item.id}>
                <img src={item.thumbnail} alt='product-img' />
                <div className='item-details'>
                  <p>{item.title}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
                <div
                  className='delete-icon'
                  onClick={() => removeItem(item.id)}
                >
                  <DeleteIcon />
                </div>
              </div>
            ))}
          </div>
          <div className='checkout-section'>
            <h2>Summary</h2>
            <p>
              Subtotal <span> ₹{Math.round(totalPrice)} </span>
            </p>
            <p>
              Discount <span>-₹{Math.round(discountPrice, 0)}</span>
            </p>
            <p>
              Shipping <span>free</span>
            </p>
            <p className='total-value'>
              Total <span>₹{totalPrice - discountPrice}</span>
            </p>
            <button className='checkout-btn'>Checkout</button>
          </div>
        </div>
      ) : (
        <div className='emptyCart-container'>
          <h1>Your Cart is Empty</h1>
          <img src={EmptyCart} alt='empty-cart' />
        </div>
      )}
    </div>
  );
};

export default Cart;
