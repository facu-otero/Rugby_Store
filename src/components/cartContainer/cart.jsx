import * as React from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { getFirestore } from "../../firebase";
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
          <button onClick={handleCheckout}>Finalizar compra</button>
        </>
      )}
    </div>
  );
};

const newOrder = {
buyer:{name:"Facundo", Phone: 3581234567, email:"algo@algo.com"},
items: [{item: "zapatillas", quantity: 2}
],
total: 1000,
};
const handleCheckout = () => {
  const db = getFirestore();
  const orderCollection = db.collection("orders");
  
  orderCollection.add(newOrder)
  .then((docRef)=> console.log("se creo el documento exitosamente", docRef.id))
  .catch((error)=> console.log(error));
};