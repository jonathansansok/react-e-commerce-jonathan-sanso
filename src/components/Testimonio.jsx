import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio(props){
    return (
        <div className= 'contenedor-testimonio'>
            <div className= 'anyTravel'>
            <img
             className= 'imagen-testimonio'
            src={require(`../imagenes/img-${props.imagen}.jpg`)}
            alt= {props.imagen} />
            </div>
            <div className= 'contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre} en {props.pais}</strong></p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>

                <p className='texto-testimonio'>"{props.testimonio}"</p>
                <section className='numerales'>
                <label for="tentacles">Pasajes:</label>
                <input type="number" className="contador" id="tentacles" name="tentacles" min="1" max="20" placeholder="1"></input>
                </section>
                <section className='fechasTodas'>
                    <article className='checkIn'>
                        <label for="start">Check-in:</label>
                        <input type="date" id="start" name="trip-start"value="2022-05-22" min="2018-01-01" max="2018-12-31" />
                    </article>
                    <article className='checkOut'>
                        <label for="start">Check-Out:</label>
                        <input type="date" id="start" name="trip-start"value="2022-05-22" min="2022-05-22" max="2024-12-31" />
                    </article>
                </section>

                <button className='agregarACarrito'>Agregar a Carrito</button>
            </div>
        </div>
    );
}

 export default Testimonio; 