import React from 'react';
import '../hojas-de-estilo/ItemDetail.css';
import ItemCount from './ItemCount.jsx';

export function ItemDetail({item}){
    return (
        <div className= 'top-contenedor-Item-detail'>
            <div className= 'contenedor-Item-detail'>
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
                <div className= 'contenedor-texto-Item-detail-bajo'>
                    <h3>{item.descripcion}</h3>
                    <section className='numerales-detail'>
                    <ItemCount stock={10} initial={1} 
                    />
                    </section>
                    <section className='fechasTodas-detail'>
                        <article className='checkIn-detail'>
                            <label htmlFor="start">Check-in:</label>
                            <input type="date" id="start" name="trip-start"value="2022-05-22" min="2022-05-22" max="2024-12-31" />
                        </article>
                        <article className='checkOut-detail'>
                            <label htmlFor="start">Check-Out:</label>
                            <input type="date" id="start" name="trip-start"value="2022-05-22" min="2022-05-22" max="2024-12-31" />
                        </article>
                    </section>
                    <button className='agregarACarrito-detail'><a href="App.js">Agregar a carrito</a></button>
                </div>
            </div>
        </div>
    );
}

 export default ItemDetail; 