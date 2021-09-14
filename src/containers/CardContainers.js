import * as React from "react";
import Card from "../components/Card/Card";

const CardContainers = () => {
  // React.useEffect(() => {
  //   console.log("El componente se ha montado o el valor indicado en el array de dependencias ha cambiado.");
  //   return () => {
  //     console.log("El componente se ha desmontado");
  //   };
  // }, [unNumero]);

  const comprarProducto = (product) => {
    console.log(`Has comprado el producto: ${product}`);
   
  };
  const quitarProducto = (product) => {
    console.log(`Has quitado un prducto: ${product}`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Card
        title="Camiseta alternativa Jaguares"
        price={4500}
        image="https://d3ugyf2ht6aenh.cloudfront.net/stores/142/220/products/camiseta-alternativa-1080x10801-8f899bd6884ce59fd515759956377549-320-0.png"
        comprar={comprarProducto}
        quitar={quitarProducto}
      />
      <Card
        title="Camiseta Jaguares Niños (Stadium)"
        price={2500}
        image="https://d3ugyf2ht6aenh.cloudfront.net/stores/142/220/products/camiseta-jaguares-nino1-79c4a2f27bbda08a3115761773748584-320-0.png"
        comprar={comprarProducto}
        quitar={quitarProducto}
      />
      <Card
        title="Pechera hombrera Trilite V2 Gilbert"
        price={3400}
        image="https://d3ugyf2ht6aenh.cloudfront.net/stores/142/220/products/epauliere-rugby-trilite-v2-gilbert-jpg1-6ee8129ce5c943ac4315342692798722-320-0.png"
        comprar={comprarProducto}
        quitar={quitarProducto}
      />
    </div>
  );
};

export default CardContainers;