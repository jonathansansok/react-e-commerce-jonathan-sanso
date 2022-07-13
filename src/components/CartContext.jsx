//creo el contexto
//imports
import { createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

//  creo el provider
function CartContextProvider({ children }) { //componente
  const [cartList, setCartList] = useState([])




  const addToCart = (item) => {
<<<<<<< HEAD
      const idx = cartList.findIndex(prod => item.id === prod.id);   // 0 -> 

      if (idx !== -1) {
          // la lógica
          const newArray = cartList
          const newCant = cartList[idx].initial + item.initial
          newArray[idx].initial = newCant
          setCartList([...newArray])
      } else {
          setCartList([
              ...cartList,
              item
          ])
      }
zz
=======
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
>>>>>>> shop
  }

  const removeCart = () => {
      setCartList([])
  }
  
  const totalAPagar = () => {
      return cartList.reduce((acum, prod) => acum + (prod.initial * prod.precio), 0)
  }

  const totalPasajes = () => {
    let total = 0;
    cartList.forEach((item) => (total += item.initial));
    return total;
  };

  const cantidadTotalItem = () => {
    return cartList.reduce((acum, prod) => acum += prod.initial, 0)
  };

  const eliminarItem = (id) => {
      setCartList(cartList.filter(prod => prod.id !== id))
  }

  return (
<<<<<<< HEAD
      <CartContext.Provider value={{
          cartList,
          addToCart,
          removeCart,
          totalAPagar,
          totalPasajes,
          cantidadTotalItem,
          eliminarItem
      }}>
=======
    <CartContext.Provider value={{
        // el isInCart fue reemplazado en otra parte ahorrar codigo. 
        // el cantidadTotalItem fue reemplazado en otra parte ahorrar codigo. 
        cartList,
        addToCart,
        removeCart,
        totalAPagar,
        totalPasajes,
        eliminarItem,
    }}>
>>>>>>> shop

    {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider