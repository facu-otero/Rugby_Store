import * as React from 'react'

const CartContext = React.createContext([]);
export const ContextProvider = ({children}) =>{
    return <CartContext.Provider>{children}</CartContext.Provider>
};

export default CartContext
