import React from "react";
import "./NavBar.css";
import carrito from "../photos/icons/cart.png";

function NavBar() {
  return (
    
    <div>
      <h1 className="navbar">Rugby Store</h1>
      <img src={carrito}/>
    </div>
  );
}

export default NavBar;
