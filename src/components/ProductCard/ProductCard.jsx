import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({ product, parent, token, setCart, cart }) {
  const addToCart = (item) => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    let prodQty = 0;
    let curr = 0;
    const result = storedCart.find((product, index) => {
      curr = index;
      return product.id === item.id;
    });

    if (result) {
      storedCart[curr].quantity += 1;

      prodQty = storedCart[curr].quantity;
    } else {
      item.quantity = 1;
      prodQty = 1;
      storedCart.push(item);
    }
    alert(
      "Added item! You have " + prodQty + " " + item.title + " in your cart!"
    );
    setCart(storedCart);
    localStorage.setItem("cart", JSON.stringify(storedCart));
  };

  if (parent === "details") {
    return (
      <div className="product-card">
        <h2>{product?.title}</h2>
        <img src={product?.image} alt={product?.title} />
        <p>{product?.price}</p>
        {parent === "details" && <p>{product?.description}</p>}
        {token && (
          <button
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    );
  }

  return (
    <Link to={`/product/details/${product?.id}`} className="product-card">
      <h2>{product?.title}</h2>
      <img src={product?.image} alt={product?.title} />
      <p>{product?.price}</p>
    </Link>
  );
}
