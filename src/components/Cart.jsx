import React from 'react';
import { useCartContext } from './CartContext.jsx'; 
import '../hojas-de-estilo/Cart.css'; 
import { Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer.jsx'
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
  
   /*  const generarOrden = async (e) => {
      setLoading(true);
      e.preventDefault();
  
      // Nuevo objeto de orders    
      let orden = {}
   */

      orden.total = totalAPagar()
  
      orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.precio * cartItem.cantidad
        // const cantidad = cartItem.cantidad
  
        return { id, nombre, precio }
      })
 /*  
      const queryActulizarStock = await query(
        queryCollectionStock, //                 
        where(documentId(), 'in', cartList.map(it => it.id))     
      )
  
      const batch = writeBatch(db)
  
      await getDocs(queryActulizarStock) */
       /*  .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
          cantidad: res.data().cantidad - cartList.find(item => item.id === res.id).cantidad
        })))
        .finally(() => 
        alert("su pedido se realizo con exito")) */
  
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
  
        <div className='cartconteiner'>
          {cartList.length !== 0 ? (
            <div className='cartIzquierda'>
              {cartList.map(producto => <div className='cartItem' key={producto.id} >
                <img src={producto.foto} alt='' /> <div className='cartDetalle' > <p>{producto.nombre}</p>
                  <p>Cantidad: {producto.cantidad} - SubTotal ${producto.precio * producto.cantidad}</p>
                  <p> <button size="sm" onClick={() => eliminarItem(producto.id)} className="btn btn-danger">Eliminar</button>{' '}</p>
                </div>
              </div>)}
  
            </div>
          ) : (
            <>
              <div className='cartconteiner'>
                <div className='cartIzquierda'>
                  <h2>Su Carrito Esta Vacio</h2>
                  <Link className="btn btn-warning" to="/" element={<ItemListContainer />}>Volver a tienda</Link>
                </div>
              </div>
            </>
          )}
          <div className='cartDerecha'>
  
            <p>Cantidad Total: {totalPasajes()}</p>
  
            <p>Total ($) {totalAPagar()}</p>
  

          </div>
  
        </div>
        <button className="btn btn-danger" onClick={removeCart}>Vaciar Carrito</button>
      </Container>
    )
  }
  
  export default Cart