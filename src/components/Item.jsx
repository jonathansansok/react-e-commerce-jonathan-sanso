import React from 'react';
import '../hojas-de-estilo/Item.css';
import ItemCount from './ItemCount.jsx';

export function Item({reco}){
    return (
        <div className= 'contenedor-Item'>
            <div className= 'anyTravel'>
                <img
                className= 'imagen-Item'
                src={require(`../imagenes/img-${reco.imagen}.jpg`)}
                alt= {reco.imagen} />
            </div>
            <div className= 'contenedor-texto-Item'>
                <p className='nombre-Item'><strong>{reco.nombre} en {reco.pais}</strong></p>
                <p className='incluye-Item'>{reco.incluye}</p>

                <p className='precio-Item'>US$ {reco.precio}.-</p>
                <section className='numerales'>
                <ItemCount stock={10} initial={1} 
                />

                </section>
                <section className='fechasTodas'>
                    <article className='checkIn'>
                        <label htmlFor="start">Check-in:</label>
                        <input type="date" id="start" name="trip-start"value="2022-05-22" min="2022-05-22" max="2024-12-31" />
                    </article>
                    <article className='checkOut'>
                        <label htmlFor="start">Check-Out:</label>
                        <input type="date" id="start" name="trip-start"value="2022-05-22" min="2022-05-22" max="2024-12-31" />
                    </article>
                </section>
                <button className='agregarACarrito'><a href="App.js">Agregar a carrito</a></button>
            </div>
        </div>
    );
}

 export default Item; 