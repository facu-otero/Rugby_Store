import * as React from 'react';
import {useParams, Link} from "react-router-dom";
import ItemCount from '../itemCount/ItemCount';
import "./itemDetail.css";
import CartContext from "../../context/CartContext"


const Itemdetail = () => {
    const [product, setProduct] = React.useState({});
    const {id} = useParams();
    const [qty, setQty] = React.useState(0)
    const {addItem} = React.useContext(CartContext)


    
    
    
    React.useEffect (() => {
        
    fetch(`http://localhost:3001/products/${id}`)
    .then((response) => response.json())   
    .then((data) => setProduct(data))
    .catch((error) => console.log(`Hubo un error ${error.status}`));
    }, [id]);

    const onAdd = (quantityToAdd) => {
      const qty = parseInt(quantityToAdd)
      console.log('se agrego un item', product)
      addItem(product, qty)
      setQty(qty)
  } 
;
    return (
              <div className="container">
              <h1>Detalle de Producto</h1>
              <h2>{product?.title}</h2>              
              <img src= {product?.image} alt="imagen del producto"/>
              <p>{product.description}</p>
              <p>{product?.price}</p>
              { qty === 0 ?
                    (product.title && <ItemCount onAdd={onAdd} />)
                        :
                    <Link to='/cart' >
                        <button >Terminar mi compra</button>
                    </Link> 
                }

              </div>
              
          );
        }


export default Itemdetail
