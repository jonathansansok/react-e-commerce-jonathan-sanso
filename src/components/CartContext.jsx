import React from 'react';

  import { createContext, useContext, useState } from "react"; 


 const CartContext = createContext([])
 
 export const useCartContext = () => useContext(CartContext)
 
 
 function CartContextProvider({ children }) { //componente
     const [cartList, setCartList] = useState([])
        console.log(cartList)
 
 
 
     const addToCart = (item) => {
         const idx = cartList.findIndex(prod => item.id === prod.id);   // 0 -> 
 
         if (idx !== -1) {
             // la lógica
             const newArray = cartList
             const newCant = cartList[idx].cantidad + item.cantidad
             newArray[idx].cantidad = newCant
             setCartList([...newArray])
         } else {
             setCartList([
                 ...cartList,
                 item
             ])
         }
 
         setCartList([
             ...cartList,
             item
         ])
     }
 
     const removeCart = () => {
         setCartList([])
     }
 
     const totalAPagar = () => {
         return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio), 0)
     }
 
     const totalJuegos = () => {
         let total = 0;
         cartList.forEach((item) => (total += item.cantidad));
         return total;
 
     };
 
     const cantidadTotalItem = () => {
         return cartList.reduce((acum, prod) => acum += prod.cantidad, 0)
     };
 
     const eliminarItem = (id) => {
         setCartList(cartList.filter(prod => prod.id !== id))
     }
 
     return (
         <CartContext.Provider value={{
             cartList,
             addToCart,
             removeCart,
             totalAPagar,
             totalJuegos,
             cantidadTotalItem,
             eliminarItem
         }}>
 
             {children}
         </CartContext.Provider>
     )
 }
 
 export default CartContextProvider