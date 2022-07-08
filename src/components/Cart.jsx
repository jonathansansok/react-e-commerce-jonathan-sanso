import React from 'react';
import { useCartContext } from './CartContext.jsx'; 
import '../hojas-de-estilo/Cart.css'; 
import { Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer.jsx';
/* import ItemCount from './ItemCount.jsx'; */
import { useState, useEffect } from 'react'
/* import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore' */
import Container from 'react-bootstrap/Container'


function Cart() {
    
    const {cartList,
        addToCart,
        removeCart,
        totalAPagar,
        totalPasajes,
        cantidadTotalItem,
        eliminarItem,
        isInCart} = useCartContext()
    const [isLoading, setLoading] = useState(false);
  
    const generarOrden = async (e) => {
      setLoading(true);
      e.preventDefault();
  
      // Nuevo objeto de orders    
      let orden = {}
      orden.total = totalAPagar() 
  
      orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.precio * cartItem.cantidad
        // const cantidad = cartItem.cantidad
  
        return { id, nombre, precio }
      })
 
      removeCart();
 /*      batch.commit() */
    }
  
    function timeOutEjemplo() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }
  
    useEffect(() => {
      if (isLoading) {
        timeOutEjemplo().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);

    return (
      <Container>
        <h1 className='cart-full-h1'>Detalles</h1>
          <div className=''>
          {cartList.length !== 0 ? (
            <div className='cartIzquierda'>
              {cartList.map(producto => <div className='' key={producto.id} >
                  <img src={`/imagenes/img-${producto.imagen}.jpg`} alt='' /> <div className='' > <p>{producto.nombre}</p>

                    <p>Cantidad: {cantidadTotalItem()} - SubTotal ${producto.precio * producto.cantidad}</p>
                    
                    <p> <button onClick={() => eliminarItem(producto.id)} className="">Eliminar</button>{' '}</p>
                  </div>
                </div>
                )
              }
              </div>
          ) : (
            <>
              <div className=''>
                <div className=''>
                  <h2>Su Carrito Esta Vacio</h2>
                  <Link className="" to="/" element={<ItemListContainer />}>Volver a tienda</Link>
                </div>
              </div>
            </>
          )}
          <div className=''>
            <p>Cantidad Total: {totalPasajes()}</p>
            <p>Total US ($) {totalAPagar()}</p>
            </div>
 
        </div>
        <button className="" onClick={removeCart}>Vaciar Carrito</button>
      </Container>
    )
  }
  
  export default Cart