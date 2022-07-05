import { createContext, useContext, useState} from 'react'
//1 crear el contexto 
const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

//state que le pasamos al useState desde los productos



// 2 creo el provider
function CartContextProvider({ children }) { //componente
  const [cartList, setCartList] = useState([])




  const addToCart = (item) => {
      const idx = cartList.findIndex(prod => item.id === prod.id);   // 0 -> 

      if(isInCart(item.id)) {
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

  const isInCart = (id) =>{
    setCartList(cartList.some(prod => prod.id == id))
  }

  return (
      <CartContext.Provider value={{
          cartList,
          addToCart,
          removeCart,
          totalAPagar,
          totalPasajes,
          cantidadTotalItem,
          eliminarItem,
          isInCart
      }}>

          {children}
      </CartContext.Provider>
  )
}

export default CartContextProvider