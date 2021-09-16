import * as React from "react";
import Card from "../components/Card/Card";

const CardContainers = () => {
  const [items, setItems] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);
  
  
  React.useEffect(() => {
    setCargando(true) 
    getProducts()
      .then((result) => setItems(result))
      .finally(() =>setCargando(false));
  }, []);

  const comprarProducto = (product) => {
    console.log(`Has comprado el producto: ${product}`);
  };

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(productos), 5000);
    });
  };


  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
     {cargando && <p>...Cargando productos...</p>}
     {items?.map((producto) => {
       /* el ? es porque sino mientras los carga tira un error */
          return (
            <Card
              key={producto.id}
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

const productos = [
  
{
  id:1,
  title:"Camiseta alternativa Jaguares",
  price:4500,
  image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/142/220/products/camiseta-alternativa-1080x10801-8f899bd6884ce59fd515759956377549-320-0.png",
  
},  
{ 
  id:2,
  title:"Camiseta Jaguares Niños (Stadium)",
  price:2500,
  image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/142/220/products/camiseta-jaguares-nino1-79c4a2f27bbda08a3115761773748584-320-0.png",
  
},  
  
 {
  id:3,
  title:"Pechera hombrera Trilite V2 Gilbert",
  price:3400,
  image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/142/220/products/epauliere-rugby-trilite-v2-gilbert-jpg1-6ee8129ce5c943ac4315342692798722-320-0.png",
  
 },
]