import React, { useEffect, useState } from "react";
import "./Cart.css";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    console.log(storedCart);
    setCart(storedCart);
    setCartTotal(
      storedCart.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cart]);

  const removeItem = (prodId) => {
    const newCart = cart.filter((item) => item.id != prodId);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="cart-item-row" key={item.id}>
            <img src={item?.image} alt={item?.title} />
            <p>{item?.title}</p>
            <p>Price:&nbsp;${item?.price.toFixed(2)}</p>
            <p>Qty:&nbsp;{item?.quantity}</p>
            <p>Total:&nbsp;${(item?.quantity * item.price).toFixed(2)}</p>
            <button
              onClick={() => {
                removeItem(item.id);
              }}
            >
              Remove Item
            </button>
          </div>
        );
      })}
      <p className="cart-total">Cart Total:&nbsp;${cartTotal.toFixed(2)}</p>
    </div>
  );
}
