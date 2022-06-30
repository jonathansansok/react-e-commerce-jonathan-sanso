import { useState, createContext, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
  addedItems: [{ name: "Bicicleta", quantity: 1 }],
  totalPrice: 0
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(INITIAL_STATE);

  const addItem = (item) => {
    if (cart.addedItems.some((addedItem) => addedItem.name === item.name)) {
      // ya existe el item, hacer algo
      return;
    }

    const newAddedItems = cart.addedItems.map((product) => {
      if (product.name === "Bicicleta") return { ...product, quantity: 2 };

      return product;
    });
    setCart({ ...cart, addedItems: newAddedItems });
  };

  const clear = () => {
    setCart(INITIAL_STATE);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
