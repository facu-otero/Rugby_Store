import React from "react";
import "./NavBar.css";
import carrito from "../Photos/icons/cart.png";
import { Link } from "react-router-dom";
import Categories from "../categories/categories";

function NavBar() {
  const [selectedCategory, setSelectedCategory ] = React.useState(null)
  console.log(selectedCategory)
  return (
    <div className="navbar">
      <div className="list">
        <Link to="/">Rugby Store</Link>
        <ul>
          <li>
            <Categories setSelectedCategory ={setSelectedCategory}/>
          </li>
        </ul>
      </div>
      <div className="cart">
        <p>(0)</p>
        <img src={carrito} alt="carrito" />
      </div>
    </div>
  );
}

export default NavBar;
