import React from "react";
import "./NavBar.css";
import carrito from "../Photos/icons/cart.png";

function NavBar() {
  return (
    
    <div className="navbar">
      <h1>Rugby Store</h1>
      <img src={carrito} alt="carrito"/>
    </div>
  );
}

export default NavBar;
