//imports
import React from 'react';
import { useCartContext } from './CartContext.jsx'; 
import '../hojas-de-estilo/Cart.css'; 
import { Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer.jsx';
import { useState, useEffect } from 'react'
<<<<<<< HEAD
/* import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore' */
=======
 import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore' 


>>>>>>> fb1

function Cart() {
    const {cartList,
        addToCart,
        removeCart,
        totalAPagar,
        totalPasajes,
        eliminarItem,
        } = useCartContext()
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
    }
  
/*     function timeOutEjemplo() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }
  
    useEffect(() => {
      if (isLoading) {
        timeOutEjemplo().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]); */

    return (
      <main className='cart-full'>
        <h1 className='cart-full-h detalles'>Detalles</h1>
          <div className=''>
          {cartList.length !== 0 ? (
          <>
<<<<<<< HEAD
            <div className='cartIzquierda'>
              {cartList.map(producto => 
                <div className='' key={producto.id}>
                  <img src={`/imagenes/img-${producto.imagen}.jpg`} alt='' /> <div className=''> <p>{producto.nombre}</p>

                  <div className='botonera-item-cart'>
                    <p>Cantidad: </p>
                      <button onClick={() => addToCart({ id: producto.id, initial: -1 })} disabled={producto.initial === 1}>-</button>
                      {producto.initial}  
                      <button onClick={() => addToCart({ id: producto.id, initial: 1 })} disabled={producto.initial === producto.stock}>+ </button>
                      <p className='subTotal'>SubTotal ${Number(producto.precio) * producto.initial}</p>
                  </div>
                    <p> <button onClick={() => eliminarItem(producto.id)} className="">Eliminar</button>{' '}</p>
                  </div>
                </div>
              )}
            </div>
            <div className=''>
                <p>Total pasajes: {totalPasajes()}</p>
                <p>Total U$D {totalAPagar()}</p>
                <button className="" onClick={removeCart}>Vaciar Carrito</button>
=======
            <div className='renderizada-card'>
              {cartList.map(producto => <div className='renderizada-card-unidad' key={producto.id}>
                <img className='renderizada-foto' src={`/imagenes/img-${producto.imagen}.jpg`} alt='' /> 
                <article className='renderizada-specs-todas'>
                  <div className='renderizada-specs-palabras'> <p><strong>{producto.nombre}</strong> en <strong>{producto.pais}</strong></p>
                    <div className='renderizada-botonera-item-cart'>
                      <p>Cantidad: </p>
                        <button className='botonera-sumaresta' onClick={() => addToCart({ id: producto.id, initial: -1 })} disabled={producto.initial === 1}><p>-</p></button>
                        <strong className='botonera-sumaresta-numero' >{producto.initial}</strong>
                        <button className='botonera-sumaresta' onClick={() => addToCart({ id: producto.id, initial: 1 })} disabled={producto.initial === producto.stock}><p>+</p></button>
                        <p className='subTotal'>SubTotal U$D <strong>{Number(producto.precio) * producto.initial}</strong>.-</p>
                    </div>
                    <button className='agregarACarrito-detail' onClick={() => eliminarItem(producto.id)} >Eliminar</button>{' '}
                  </div>
                </article>
              </div>
              )}
            </div><div className=''>
                <p>Total Pasajes: <strong>{totalPasajes()}</strong></p>
                <p>Total U$D <strong>{totalAPagar()}</strong>.-</p>
                <button className='agregarACarrito-detail' onClick={removeCart}>Vaciar Carrito</button>
>>>>>>> fb1
            </div>
          </>
          ) : (
            <>
              <div className=''>
                <div className='carrito-vacio'>
                  <h2 className='cart-full-h'>Su Carrito Esta Vacio</h2>
                  <Link  to="/" ><p className='agregarACarrito-detail volver'>Volver a tienda</p></Link>
                </div>
              </div>
            </>
          )}
        </div>
<<<<<<< HEAD

=======
>>>>>>> fb1
      </main>
    )
  }
  
  export default Cart