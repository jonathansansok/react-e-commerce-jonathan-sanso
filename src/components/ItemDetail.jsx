//imports
import React, { useState } from 'react';
import '../hojas-de-estilo/ItemDetail.css';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext.jsx';

export function ItemDetail({travels}){
    const { addToCart } = useCartContext()
    
    const [cantidad,setCantidad] = useState(0)

    const agregarAlCarrito=(Numero)=>{
    
        if (Numero === 0){
            alert(`No se puede agregar cero pasajes`)
        }
        else{
        alert(`Se agregaron ${Numero} unidades al carrito `)

        setCantidad(Numero)
        
        addToCart({ ...travels, initial: Numero })
    }
}
    return (
        <div className= 'top-contenedor-Item-detail'>
            <div className= 'contenedor-Item-detail'>
                <div className= 'contenedor-Item-detail-alto'>
                    <div className= 'anyTravel-detail'>
                        <img className= 'imagen-Item-detail'
                        src={travels.imagen}
                        alt= {travels.imagen} />
                    </div>
                    <div className= 'contenedor-texto-Item-detail'>
                        <p className='nombre-Item-detail'>          
                            <strong> {travels.titulo} en {travels.pais} </strong> </p>
                        <p className='incluye-Item-detail'>{travels.incluye}</p>

                        <p className='precio-Item-detail'>US$ {travels.precio}.-</p>
                    </div>
                </div>

                <div className= 'contenedor-texto-Item-detail-bajo'>
                    <h3>{travels.descripcion}</h3>
                    <article className= 'contenedor-texto-Item-detail-bajo letrasNumeros'>
                        <section className='fechasTodas-detail'>
                            <article className='checkIn-detail'>
                                <label htmlFor="start">Check-in:</label>
                                <input type="date" id="start" name="trip-start"value="2023-01-01" min="2023-01-01" max="2024-12-31"  readOnly/>
                            </article>
                            <article className='checkOut-detail'>
                                <label htmlFor="start">Check-Out:</label>
                                <input type="date" id="start" name="trip-start"value="2023-01-07" min="2023-01-07" max="2024-12-31" readOnly />
                            </article>
                        </section>
                        <section className='numerales-detail'>
                           {cantidad===0 
                           ?
                           <section className='agregar-volver'>   
                                <ItemCount stock={travels.stock} initial={travels.initial} onAdd={agregarAlCarrito}/>
                                <Link to='/' > <button className='agregarACarrito-detail terminar'> Elegir mas </button> </Link>
                           </section>
                            : 
                            <>      
                              <Link to='/' > <button className='agregarACarrito-detail terminar itemdetail'> Elegir mas </button> </Link>                    
                              <Link to='/cart' > <button className='agregarACarrito-detail terminar itemdetail'> Finalizar Compra </button> </Link>
                            </>
                            } 
                        </section>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail; 