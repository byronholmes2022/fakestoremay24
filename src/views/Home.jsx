import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import "./Home.css";
import axios from "axios";

export default function Home({
  setProducts,
  productsToShow,
  setProductsToShow,
  products,
}) {


  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setProductsToShow(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCategoryClick = (category) => {
    if (category) {
      setProductsToShow(
        products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        )
      );
    } else {
      setProductsToShow(products);
    }
  };

  return (
    <div>
      <div className="filter-menu">
        <span>Filter by Category:</span>
        <div className="filter-buttons">
          <p
            onClick={() => {
              handleCategoryClick("men's clothing");
            }}
          >
            Men's Clothing
          </p>
          <p
            onClick={() => {
              handleCategoryClick("women's clothing");
            }}
          >
            Women's Clothing
          </p>
          <p
            onClick={() => {
              handleCategoryClick("electronics");
            }}
          >
            Electronics
          </p>
          <p
            onClick={() => {
              handleCategoryClick("jewelery");
            }}
          >
            Jewelry
          </p>
          <p
            onClick={() => {
              handleCategoryClick("");
            }}
          >
            Reset
          </p>
        </div>
      </div>
      <ProductList products={productsToShow} />
    </div>
  );
}
