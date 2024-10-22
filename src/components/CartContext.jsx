import { createContext, useContext, useState, useEffect } from "react";

// Creo el provider
const CartContext = createContext([]);

// Función para usar el contexto
export const useCartContext = () => useContext(CartContext);

// CartContextProvider
function CartContextProvider({ children }) {
  // Recuperar carrito desde el localStorage si existe
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cartList, setCartList] = useState(initialCart);

  // Efecto para guardar el carrito en localStorage cuando cambia el cartList
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  // Función para agregar al carrito
  const addToCart = (item) => {
    if (isInCart(item.id)) {
      const newArray = cartList.map((i) => {
        if (i.id === item.id) {
          i.initial = i.initial + item.initial;
        }
        return i;
      });
      setCartList(newArray);
    } else {
      setCartList([...cartList, item]);
    }
  };

  // Función para vaciar el carrito
  const removeCart = () => {
    setCartList([]);
    localStorage.removeItem("cart"); // Eliminar carrito del localStorage al vaciar
  };

  // Función que suma todos los subtotales
  const totalAPagar = () => {
    return cartList.reduce(
      (acum, prod) => acum + prod.initial * prod.precio,
      0
    );
  };

  // Función que suma la cantidad de pasajes totales.
  const totalPasajes = () => {
    let total = 0;
    cartList.forEach((item) => (total += item.initial));
    return total;
  };

  // Función que elimina un producto según ID
  const eliminarItem = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

  // Función para verificar si el producto ya está en el carrito
  const isInCart = (id) => {
    return cartList.some((prod) => prod.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeCart,
        totalAPagar,
        totalPasajes,
        eliminarItem,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
