import * as React from 'react';
import {useParams} from "react-router-dom";
import ClickCounter from '../itemCount/ItemCount';
import "./itemDetail.css"


const Itemdetail = () => {
    const [product, setProduct] = React.useState({});
    const {id} = useParams();
    
    React.useEffect (() => {
        
    fetch(`http://localhost:3001/products/${id}`)
    .then((response) => response.json())   
    .then((data) => setProduct(data))
    .catch((error) => console.log(`Hubo un error ${error.status}`));
    }, [id]);

    return (
              <div className="container">
              <h1>Detalle de Producto</h1>
              <h2>{product?.title}</h2>              
              <img src= {product?.image} alt="imagen del producto"/>
              <p>{product.description}</p>
              <p>{product?.price}</p>
              <ClickCounter>
              </ClickCounter>
              </div>
              
              
            
          );
        }


export default Itemdetail
