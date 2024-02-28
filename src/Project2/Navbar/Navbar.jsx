import React from "react";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/brand_logo.png" alt="" />
      </div>
      <div className="links">
        <Link to={"/"}>Menu</Link>
        <Link to={"/game"}>Game</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/food"}>Food</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/phone"}>Phone</Link>
      </div>
      <Link to={"/cart"}>
        <ShoppingCart size={32} />
      </Link>
    </nav>
  );
};
