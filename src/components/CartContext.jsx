//creo el contexto
import { createContext, useContext, useState} from 'react'
//  creo el provider
const CartContext = createContext([])


export const useCartContext = () => useContext(CartContext)
//  creo el provider
function CartContextProvider({ children }) { //componente
const [cartList, setCartList] = useState([])

//funcion que agregar el producto al carrito pero sin repetir gracias al isInCart(item.id)
//recordar que initial es igual a la cantidad de pasajes ya modificada, se deja el initial por la referencia con firebase

const addToCart = (item) => {
  if (isInCart(item.id)) {
    const newArray = cartList.map(i => {
      if (i.id === item.id) {
        i.initial = i.initial + item.initial
      }
      return i
    })
    setCartList(newArray)
  } else {
    setCartList([
      ...cartList,
      item
    ])
  }
}
  //funcion que vacía el cart
const removeCart = () => {
setCartList([])
};

//funcion que suma todos los subtotales
const totalAPagar = () => {
return cartList.reduce((acum, prod) => acum + (prod.initial * prod.precio), 0)
};

//funcion que suma la cantidad de pasajes totales.
const totalPasajes = () => {
let total = 0;
cartList.forEach((item) => (total += item.initial));
return total;
};

//funcion que elimian un producto segun ID
const eliminarItem = (id) => {
setCartList(cartList.filter(prod => prod.id !== id))
};

//funcion que no perimte repetir el producto
const isInCart = (id) =>{
return cartList.some(prod => prod.id === id)
};

//Aquí CartContext.Provider 
return (
  <CartContext.Provider value={{
      cartList,
      addToCart,
      removeCart,
      totalAPagar,
      totalPasajes,
      eliminarItem,
  }}>
  {children}
  </CartContext.Provider>
)
}

export default CartContextProvider