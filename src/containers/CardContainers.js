import * as React from "react";
import Card from "../components/Card/Card";
import { getFirestore } from "../firebase";

const CardContainers = () => {
  const [data, setData] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);
  const [error, setError] = React.useState(null);
  
React.useEffect(()=>{
  const db = getFirestore();
  const productsCollection = db.collection("products");
  setCargando(true);
  productsCollection
  .get()
  .then((querySnapshot)=> {
    if (querySnapshot.empty){
      console.log("no hay productos");
    }else{
setData(querySnapshot.docs.map((doc)=> ({id: doc.id, ...doc.data()})));
    
    }
  })
  .catch((error) => setError(error))
  .finally(() => setCargando(false));

},[]);


  const comprarProducto = (product) => {
    console.log(`Has comprado el producto: ${product}`);
  };
  
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {cargando && <p>...Cargando productos...</p>}
      {error && (<p>Ha habido un error: {error.status}</p>)}
      {data.map((producto) => {
        /* el ? es porque sino mientras los carga tira un error */
        return (
          <Card
          key={producto.id}
          productId={producto.id}
          title={producto.title}
          image={producto.image}
          price={producto.price}
          comprar={comprarProducto}
          />
          );
        })}
    </div>
  );
};

export default CardContainers;
/* 
  React.useEffect(() => {
    const url = selectedCategory
      ? `http://localhost:3001/products?categoryId=${selectedCategory}`
      : `http://localhost:3001/products`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setCargando(false));
  }, [selectedCategory]); */