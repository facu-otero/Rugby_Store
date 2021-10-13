import * as React from "react";
import "./ItemCount.css";

const ItemCount = ({onAdd}) => {
  const [counter, setCounter] = React.useState(0);
  const addHandleClick = () => {
    setCounter((prevState) => prevState + 1);
  };
  const quitHandleClick = () => {
    if (counter > 0) {
      return setCounter((prevState) => prevState - 1);
    }else{
      setCounter((prevState) => prevState = 0)
      
    };
  };
  const addHandler = ()=>{
    
    onAdd(counter)
}

  
  return (
    <>
    <div className="counter">
      <button onClick={quitHandleClick}>-</button>
      <p className="cantidad">Cantidad: {counter}</p>
      <br />
      <button onClick={addHandleClick}>+</button>
      <button disabled={ counter <= 0} onClick={addHandler}>Agregar</button>

    </div>
    
    </>
  );
};

export default ItemCount;

export const useCounter = () => {
  const quantity = 0;
  return quantity
}