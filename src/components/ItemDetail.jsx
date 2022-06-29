import React, { useState } from 'react';
import '../hojas-de-estilo/ItemDetail.css';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';

export function ItemDetail({item}){

const [cantidad,setCantidad] = useState(0)

const agregarAlCarrito=(Numero)=>{

	alert(`Se agregaron ${Numero} unidades al carrito `)

	setCantidad(Numero)

}
    return (
        <div className= 'top-contenedor-Item-detail'>
            <div className= 'contenedor-Item-detail'>
                <div className= 'contenedor-Item-detail-alto'>
                    <div className= 'anyTravel-detail'>
                        <img className= 'imagen-Item-detail'
                        src={`/imagenes/img-${item.imagen}.jpg`}
                        alt= {item.imagen} />
                    </div>
                    <div className= 'contenedor-texto-Item-detail'>
                        <p className='nombre-Item-detail'><strong>{item.nombre} en {item.pais}</strong></p>
                        <p className='incluye-Item-detail'>{item.incluye}</p>

                        <p className='precio-Item-detail'>US$ {item.precio}.-</p>
                    </div>
                </div>

                <div className= 'contenedor-texto-Item-detail-bajo'>
                    <h3>{item.descripcion}</h3>
                    <article className= 'contenedor-texto-Item-detail-bajo letrasNumeros'>
                        <section className='fechasTodas-detail'>
                            <article className='checkIn-detail'>
                                <label htmlFor="start">Check-in:</label>
                                <input type="date" id="start" name="trip-start"value="2022-05-22" min="2022-05-22" max="2024-12-31"  readOnly/>
                            </article>
                            <article className='checkOut-detail'>
                                <label htmlFor="start">Check-Out:</label>
                                <input type="date" id="start" name="trip-start"value="2022-05-22" min="2022-05-22" max="2024-12-31" readOnly />
                            </article>
                        </section>
                        <section className='numerales-detail'>
                           {cantidad===0 ? 
                           <ItemCount stock={item.stock} initial={item.initial} onAdd={agregarAlCarrito}/>
                            : 
                            <Link to='/cart' > <button className='agregarACarrito-detail terminar'> Finalizar Compra </button> </Link>} 
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
}

 export default ItemDetail; 