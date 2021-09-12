import * as React from "react";
import "./Header.css";

const Header = (props) =>{
   
    return (
      <header className="main-header">
        <p>¡Bienvenid@, {props.name}!</p>
      </header>
    );
  }

export default Header;