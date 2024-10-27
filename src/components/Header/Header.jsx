import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./Header.css";

export default function Header({
  products,
  setProductsToShow,
  setToken,
  token,
}) {
  console.log(token);
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductsToShow(filtered);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <header className="header-cont">
      <Link to="/">
        <p className="logo">FAKESTORE</p>
      </Link>
      <input
        type="text"
        placeholder="Search for items..."
        onChange={handleChange}
      />
      <div className="button-cont">
        {!token && <Link to={"/login"}>Login</Link>}
        {token && <button onClick={handleLogout}>Logout</button>}
        {token && <Link to={"/cart"}>Cart</Link>}
        {/* <Link to={"/signup"}>Signup</Link> */}
      </div>
    </header>
  );
}
