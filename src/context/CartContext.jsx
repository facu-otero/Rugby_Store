import * as React from 'react'

const CartContext = React.createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({children}) =>{
    const [cart, setCart] = React.useState([]);
    const [totalItems,setTotalItems] = React.useState(0);
    const [totalPrecio,setTotalPrecio] = React.useState(0)

    React.useEffect(()=>{
        let precio= cart.reduce((acumulador,itemActual)=>{
            const p = itemActual.quantity * itemActual.item.price
            return acumulador + p //120
        },0);

        let totItems= cart.reduce((accumulador, ItemActual)=>{
            return accumulador + ItemActual.quantity
            
        },0);
        setTotalItems(totItems);
        setTotalPrecio(precio)

    },[cart])

    const addItem = (newItem, newQuantity)=>{

        const prevCartItem = cart.find(e=> e.item.id === newItem.id)

        let newCart;
        let qty;
        if (prevCartItem){
            newCart = cart.filter(e => e.item.id !== newItem.id)
            qty = prevCartItem.quantity + newQuantity;
        }else{
            newCart = [...cart]
            qty =  newQuantity;
        }
console.log(cart)
        setCart([...newCart, 
                { item: newItem , quantity: qty  }])
        
    } // agregar cierta cantidad de un ítem al carrito

    
    /* const addItem = (item, quantity) => {
        const newItem = {item, quantity};
        setCart((prevState) =>[...prevState, newItem] );
        
}; */
const removeItem = (itemId) =>{
    const newCart = cart.filter(e => e.item.id !== itemId)
    setCart(newCart)

};
const clear = ()=>{
    setCart([]);

};
const isInCart = (id) =>{
    const currentItem = cart.find(e=> e.item.id === id)

    return currentItem ? true : false

}



    const value = {cart, addItem, removeItem, clear, isInCart, totalItems, totalPrecio};

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
