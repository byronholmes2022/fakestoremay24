import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard/ProductCard";

export default function ProductDetail({ token, cart, setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <ProductCard
        product={product}
        parent={"details"}
        token={token}
        setCart={setCart}
        cart={cart}
      />
    </>
  );
}
