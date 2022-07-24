//imports
import React from 'react';
import { useCartContext } from './CartContext.jsx'; 
import '../hojas-de-estilo/Cart.css'; 
import { Link } from 'react-router-dom';
////
import {db} from '../firebase/firebaseConfig.js'; 
import '../hojas-de-estilo/shop.css';
import TextField from '@mui/material/TextField';
import MessageSuccess from './MessageSuccess.jsx';
 import  { useState } from 'react'; 
import { collection, addDoc } from 'firebase/firestore';
/////


function Cart() {
  const {
    cartList,
    addToCart,
    removeCart,
    totalAPagar,
    totalPasajes,
    eliminarItem,
  } = useCartContext()

    ///// Empieza algoritmo del formulario con Purchase ID
	const generarOrden =  () => {
		// Para llevarme lo comprado a firebase
		let items = [];
		cartList.forEach((item) => items.push({id: item.id, title: item.titulo, price: item.precio, quantity: item.initial}));
		return items;
	}
    //Aquí se llenan los datos personales del comprador
	const initialState = {
		name: '',
		phone: '',
		email: '',
	};
	const styles = {
		containerShop: {
		textAlign: 'center',
		paddingTop: 20,
		},
	};

      //En buyer se guardan los datos personales del comprador
	const [buyer, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');
    //
	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...buyer, [name]: value });
	};

  // Cuando el cliente clickea en FINALIZAR COMPRA  se prepara todo el objeto con fecha, purchaseID, total a pagar , los productos, etc.
	const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'purchases'), {
			buyer,
			fecha: new Date(),
			totalPagar: totalAPagar(),
			items:  generarOrden(),
		});
		setPurchaseID(docRef.id);
		setValues(initialState);
    removeCart();
    
	};
  ///// Termina algoritmo del formulario con Purchase ID Y vacia carrito removeCart()

  return (
      ///// Creo un "IF": Si hay PURCHASE ID se muestra el mismo en pantalla y NADA MAS, SI NO se despliega todo el CART con FORMULARIO
      ///// y dentro del ELSE DE ARRIBA hay otro IF(linea 150)--> el cual indica: Si hay productos: MOSTRAR a los mismos, SI NO que muestre un: "CARRITO VACIO, VOLVER A INICIO"...
    <main className='cart-full'>
      {purchaseID ?   
      (
      <>
        {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
        <Link  to="/" className='agregarACarrito-detail'> Volver a tienda</Link>
      </>
      )
      :
      (
      <>              
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
              <section className='full-form-ending'>
                <div style={styles.containerShop}>
                  <h1>Complete y viaje</h1>
                  <form className='FormContainer' onSubmit={onSubmit}>
                    <TextField 
                      placeholder='Name'
                      style={{ margin: 10, width: 350 }}
                      name='name'
                      value={buyer.name}
                      onChange={handleOnChange}
                      required
                    />
                    <TextField
                      placeholder='Phone'
                      style={{ margin: 10, width: 350 }}
                      name='phone'
                      value={buyer.phone}
                      onChange={handleOnChange}
                      required
                    />
                    <TextField
                      placeholder='City'
                      style={{ margin: 10, width: 350 }}
                      name='email'
                      value={buyer.email}
                      onChange={handleOnChange}
                      required
                    />
                    <button className='agregarACarrito-detail'>FINALIZAR COMPRA</button>
                  </form>
                </div>
              </section>
            </section>
          </>
          ) 
          :
          (
            <>
              <section className=''>
                <article className='carrito-vacio'>
                  <h2 className='cart-full-h vacio1'>Su Carrito Esta Vacio</h2>
                  <Link  to="/" ><p className='agregarACarrito-detail volver'>Volver a tienda</p></Link>
                </article>
              </section>
            </>
          )}
      </div>
      </>
        )//insertala sola en 
      }
    </main>
  )
}

export default Cart