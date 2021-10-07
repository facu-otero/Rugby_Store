import * as React from 'react'

const CartContext = React.createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({children}) =>{
    const [cart, setCart] = React.useState([]);
    
    const addItem = (item, quantity) => {
        const newItem = {item, quantity};
        setCart((prevState) =>[...prevState, newItem] );
        
};
const removeItem = (id) =>{
    //Eliminar producto con id elegido
};
const clear = ()=>{
    setCart([]);

};
const isInCart = (id) => {
    //chequear si existe un producto con el id elegido
}



    const value = {cart, addItem, removeItem, clear, isInCart};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};

export const useCart = () => {
    const context = React.useContext(CartContext);
    if(!context) {
        throw new Error ("useCart debe usarse dentro de un context")
    }
    return context;
};

export default CartContext
