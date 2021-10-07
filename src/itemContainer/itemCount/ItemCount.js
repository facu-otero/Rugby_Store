import * as React from "react";
import "./ItemCount.css";

const ClickCounter = () => {
  const [counter, setCounter] = React.useState(0);
  const addHandleClick = () => {
    setCounter((prevState) => prevState + 1);
  };
    const quitHandleClick = () => {
     setCounter((prevState) => prevState - 1);
  };


  return (
    <>
    <div className="counter">
      <button onClick={addHandleClick}>+</button>
      <p className="cantidad">Cantidad: {counter}</p>
      <br />
      <button onClick={quitHandleClick}>-</button>
    </div>
    
    </>
  );
};

export default ClickCounter;
