import * as React from 'react'



const itemdetail = () => {
    const [data, setData] = React.useState([]);
    React.useEffect (() => {
        const url = "http://localhost:3001/products";
    fetch(url)
    .then((response) => {
        if(response.ok) {
            return response.json();

        } else { 
            throw response;
        }
    })
    .then((data) => setData(data))
    .catch((error) => confirm.log(`Hubo un error ${error.status}`));
    }, []);

    return (
        <div>
            
     {data?.map((product) => {
       /* el ? es porque sino mientras los carga tira un error */
          return (
              
              <p>
              key={product.id}
              title={product.title}              
              image={product.image}
              description={product.description}
              price={product.price}
              comprar={comprarProducto}
              </p>
              
              
            
          );
        })}

            
        </div>
    )
}

export default itemdetail
