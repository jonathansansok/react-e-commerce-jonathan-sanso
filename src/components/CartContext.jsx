//creo el contexto
import { createContext, useContext, useState} from 'react'
const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
//  creo el provider
function CartContextProvider({ children }) { //componente
  const [cartList, setCartList] = useState([])

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

  const removeCart = () => {
      setCartList([])
  };
  const disableCart = () => {
    setCartList([])
};

  
  const totalAPagar = () => {
      return cartList.reduce((acum, prod) => acum + (prod.initial * prod.precio), 0)
  };

  const totalPasajes = () => {
    let total = 0;
    cartList.forEach((item) => (total += item.initial));
    return total;
  };

  const eliminarItem = (id) => {
      setCartList(cartList.filter(prod => prod.id !== id))
  };

  const isInCart = (id) =>{
    return cartList.some(prod => prod.id === id)
  };
  

  return (
    <CartContext.Provider value={{
        cartList,
        addToCart,
        removeCart,
        totalAPagar,
        totalPasajes,
        eliminarItem,
        disableCart,
    }}>
    {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider