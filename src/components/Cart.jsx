//imports
import React from 'react';
import { useCartContext } from './CartContext.jsx'; 
import '../hojas-de-estilo/Cart.css'; 
import { Link } from 'react-router-dom';
import Shop from './Shop.jsx';
/*  import {shop} from './Shop.jsx';  */
function Cart() {
  const {
    cartList,
    addToCart,
    removeCart,
    totalAPagar,
    totalPasajes,
    eliminarItem,
  } = useCartContext()

  return (
    <main className='cart-full'>
      <h1 className='cart-full-h detalles'>Cart-Detalles</h1>
      <div className=''>
      {cartList.length !== 0 ? (
      <>
        <div className='renderizada-card'>
          {cartList.map(producto => <div className='renderizada-card-unidad' key={producto.id}>
            <img className='renderizada-foto' src={producto.imagen} alt='' /> 
            <section className='renderizada-specs-todas'>
              <article className='renderizada-specs-palabras'> <p><strong>{producto.titulo}</strong> en <strong>{producto.pais}</strong></p>
                <div className='renderizada-botonera-item-cart'>
                  <p>Pasajes: </p>
                    <button className='botonera-sumaresta' onClick={() => addToCart({ id: producto.id, initial: -1 })} disabled={producto.initial === 1}><p>-</p></button>
                    <strong className='botonera-sumaresta-numero' >{producto.initial}</strong>
                    <button className='botonera-sumaresta' onClick={() => addToCart({ id: producto.id, initial: 1 })} disabled={producto.initial === producto.stock}><p>+</p></button>
                    <p className='subTotal'>SubTotal U$D <strong>{Number(producto.precio) * producto.initial}</strong>.-</p>
                </div>
                <button className='agregarACarrito-detail' onClick={() => eliminarItem(producto.id)} >Eliminar</button>{' '}
              </article>
            </section>
          </div>
          )}
        </div>
        <section className=''>
          <article className='totales-cart'>
          <button className='agregarACarrito-detail vaciar-carrito' onClick={removeCart}>Vaciar Carrito</button>
          <p className='totales-cart-item'>Total Pasajes: <strong>{totalPasajes()}</strong></p>
          <p className='totales-cart-item'>Total U$D <strong>{totalAPagar()}</strong>.-</p>
          </article>
          <Shop/>
        </section>
      </>
      ) : (
        <>
          <section className=''>
            <article className='carrito-vacio'>
              <h2 className='cart-full-h'>Su Carrito Esta Vacio</h2>
              <Link  to="/" ><p className='agregarACarrito-detail volver'>Volver a tienda</p></Link>
            </article>
          </section>
        </>
      )}
    </div>
    </main>
  )
}

export default Cart