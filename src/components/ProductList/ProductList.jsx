import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

export default function ProductList({ products }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
