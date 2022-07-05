
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