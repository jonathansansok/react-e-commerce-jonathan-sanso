//imports
import React, { useState } from 'react';
import '../hojas-de-estilo/ItemDetail.css';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext.jsx';
//Aquí se logra que el comprador pueda ver el producto en detalle y pueda cambiar la cantidad de pasajes.
//initial es, previamente, la cantidad de pasajes que elegirá el usuario.
//Me traigo como parametro el Item de ItemDetailContainer
export function ItemDetail({item}){
    //importo el AddToCart para que se usado en la funcion agregarAlCarrito()
    const { addToCart } = useCartContext()
    //estado para que el usuario pueda setear la cantidad de pasajes
    const [cantidad,setCantidad] = useState(0)

    //APLICO DESTRUCTURING
    const  {imagen, titulo, pais, incluye, precio, descripcion} = item;
    const agregarAlCarrito=(Numero)=>{
        
        //funcion que no permite que se agreguen Cero pasajes Y que da alert de cuantos se agregaron
        //... y envia al addToCart() todo lo elegido por el comprador.
        if (Numero === 0){
            alert(`No se puede agregar cero pasajes`)
        }
        else{
        alert(`Se agregarán ${Numero} unidades al carrito! `)
        setCantidad(Numero)
        addToCart({ ...item, initial: Numero })
        }
    }
    //renderizo en pantalla todo:
    return (
        <section className= 'top-contenedor-Item-detail'>
            <article className= 'contenedor-Item-detail'>
                <div className= 'contenedor-Item-detail-alto'>
                    <div className= 'anyTravel-detail'>
                        <img className= 'imagen-Item-detail'
                        src={imagen}
                        alt= {imagen} />
                    </div>
                    <div className= 'contenedor-texto-Item-detail'>
                        <p className='nombre-Item-detail'>          
                            <strong> {titulo} en {pais} </strong>
                        </p>
                        <p className='incluye-Item-detail'>{incluye}</p>
                        <p className='precio-Item-detail'>US$ {precio}.-</p>
                    </div>
                </div>
                <div className= 'contenedor-texto-Item-detail-bajo'>
                    <h3>{descripcion}</h3>
                    <div className= 'contenedor-texto-Item-detail-bajo letrasNumeros'>
                        <div className='fechasTodas-detail'>
                            <div className='checkIn-detail'>
                               {/*  Por el momento me dijo el tutor que no se califica el uso de FECHAS porque no lo vimos, que lo deje en readOnly */}
                                <label htmlFor="start">Check-in:</label>
                                <input type="date" id="start" name="trip-start"value="2023-01-01" min="2023-01-01" max="2024-12-31"  readOnly/>
                            </div>
                            <div className='checkOut-detail'>
                                <label htmlFor="start">Check-Out:</label>
                                <input type="date" id="start" name="trip-start"value="2023-01-07" min="2023-01-07" max="2024-12-31" readOnly />
                            </div>
                        </div>
                        <div className='numerales-detail'>
                        {cantidad===0 
                        ? 
                        <div className='agregar-volver'>   
                            <ItemCount stock={item.stock} initial={item.initial} onAdd={agregarAlCarrito}/>
                            <Link to='/' > <button className='agregarACarrito-detail terminar'> Elegir mas </button> </Link>
                        </div>
                            : 
                            <>      
                            <Link to='/'> <button className='agregarACarrito-detail terminar itemdetail'> Elegir mas </button> </Link>                    
                            <Link to='/cart'> <button className='agregarACarrito-detail terminar itemdetail'> Ir al Cart </button> </Link>
                            </>
                            } 
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

 export default ItemDetail; 