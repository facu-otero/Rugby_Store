import * as React from "react";
import styles from "./Card.module.css";
import {Link} from "react-router-dom"

const Card = ({ title, quitar, productId, image, comprar, price, counter }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.imageContainer}>
     <Link to={`/product/${productId}`}>
        <img className={styles.image} src={image} alt={title} />
      </Link>
      </div>
      {/* <p className={styles.description}>{description}</p> */}
      <p className={styles.price}>$ {price}</p>
      <button
        className={styles.button}
        onClick={(addProduct) => comprar(title)}
      >
        Agregar al carrito
      </button>
      {/* <button
        className={styles.button}
        onClick={(quitProduct) => quitar(title)}
      >
        Quitar del carrito
      </button> */}
      {/* <p className={styles.counter}>Agregaste: {counter} productos</p> */}
    </div>
  );
};

export default Card;
