import * as React from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import "./itemDetail.css";
import CartContext from "../../context/CartContext";
import { getFirestore } from "../../firebase";

const Itemdetail = () => {
  const [product, setProduct] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  const [qty, setQty] = React.useState(0);
  const { addItem, cart } = React.useContext(CartContext);

  React.useEffect(() => {
    setLoading(true);
    // Apuntamos a la base de datos.
    const db = getFirestore();
    // Apuntamos a una colección.
    const productsCollection = db.collection("products");
    // Apuntamos a un elemento en específico.
    const product = productsCollection.doc(id);

    // Traemos los datos del producto.
    product
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("El producto no existe");
        } else {
          setProduct({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  const onAdd = (quantityToAdd) => {
    const qty = parseInt(quantityToAdd);
    console.log("se agrego un item", product);
    console.log(cart);

    addItem(product, qty);
    setQty(qty);
  };
  if (loading) {
  return <p>Cargando...</p>;
} else {
    return (
      <div className="container">
        <h1>Detalle de Producto</h1>
        <h2>{product?.title}</h2>
        <img src={product?.image} alt="imagen del producto" />
        <p>{product.description}</p>
        <p>{product?.price}</p>
        {qty === 0 ? (
          product.title && <ItemCount onAdd={onAdd} />
        ) : (
          <Link to="/cart">
            <button>Terminar mi compra</button>
          </Link>
        )}
      </div>
    );
  }
};

export default Itemdetail;
