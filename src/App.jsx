import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Header from "./components/Header/Header";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Cart from "./views/Cart";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
      setCart([]);
    }
  }, []);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  return (
    <>
      <Header
        products={products}
        setProductsToShow={setProductsToShow}
        token={token}
        setToken={setToken}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              productsToShow={productsToShow}
              setProducts={setProducts}
              setProductsToShow={setProductsToShow}
              products={products}
            />
          }
        />
        <Route
          path="/product/details/:id"
          element={
            <ProductDetail token={token} setCart={setCart} cart={cart} />
          }
        />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route
          path="/login"
          element={<Login setToken={setToken} token={token} />}
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route
          path="*"
          element={
            <Home
              productsToShow={productsToShow}
              setProducts={setProducts}
              setProductsToShow={setProductsToShow}
              products={products}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
