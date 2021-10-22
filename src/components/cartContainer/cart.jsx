import * as React from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import "./cart.css";

export const Cart = () => {
  const { cart, removeItem, totalPrecio, clear } =
    React.useContext(CartContext);

  return (
    <div className="cartContainer">
      {!cart.length ? (
        <>
          <h2>El carrito esta vacio </h2>
          <Link to="/">
            <button>Volver al inicio</button>
          </Link>
        </>
      ) : (
        <>
          {cart.map((cartItem) => (
            <div className="productContainer" key={cartItem.item.id}>
              <div> Producto: {cartItem.item.title} </div>
              <div> Cantidad: {cartItem.quantity} </div>
              <div> Precio: {cartItem.item.price} </div>
              

              <button onClick={() => removeItem(cartItem.item.id)}>
                borrar
              </button>
            </div>
          ))}
          <div>
            Total:$ {totalPrecio}
          </div>
          <button onClick={clear}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};
