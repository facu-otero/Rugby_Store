import * as React from "react";
import "./Header.css";

const Header = (props) =>{
   
    return (
      <>
      <header className="main-header">
        <p>¡Bienvenid@ a Rugby Store, {props.name}!</p>
      </header>
      <h1 className="title-header">Los mejores articulos de Rugby</h1>
      </>
    );
  }

export default Header;