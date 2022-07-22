//imports
import React, { useState } from 'react';
import '../hojas-de-estilo/ItemDetail.css';
import ItemCount from './ItemCount.jsx';
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext.jsx';
//Aquí se logra que el comprador pueda ver el producto en detalle y pueda cambiar la cantidad de pasajes
//initial es, previamente, la cantidad de pasajes que elegirá el usuario

export function ItemDetail({item}){
    const { addToCart } = useCartContext()
    const [cantidad,setCantidad] = useState(0)

    const agregarAlCarrito=(Numero)=>{
    
        if (Numero === 0){
            alert(`No se puede agregar cero pasajes`)
        }
        else{
        alert(`Se agregarán ${Numero} unidades al carrito! `)
        setCantidad(Numero)
        addToCart({ ...item, initial: Numero })
        }
    }
    return (
        <section className= 'top-contenedor-Item-detail'>
            <article className= 'contenedor-Item-detail'>
                <div className= 'contenedor-Item-detail-alto'>
                    <div className= 'anyTravel-detail'>
                        <img className= 'imagen-Item-detail'
                        src={item.imagen}
                        alt= {item.imagen} />
                    </div>
                    <div className= 'contenedor-texto-Item-detail'>
                        <p className='nombre-Item-detail'>          
                            <strong> {item.titulo} en {item.pais} </strong>
                        </p>
                        <p className='incluye-Item-detail'>{item.incluye}</p>
                        <p className='precio-Item-detail'>US$ {item.precio}.-</p>
                    </div>
                </div>
                <div className= 'contenedor-texto-Item-detail-bajo'>
                    <h3>{item.descripcion}</h3>
                    <div className= 'contenedor-texto-Item-detail-bajo letrasNumeros'>
                        <div className='fechasTodas-detail'>
                            <div className='checkIn-detail'>
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
                        ? //se importa el Itemcount.jsx 
                        <div className='agregar-volver'>   
                                <ItemCount stock={item.stock} initial={item.initial} onAdd={agregarAlCarrito}/>
                                <Link to='/' > <button className='agregarACarrito-detail terminar'> Elegir mas </button> </Link>
                        </div>
                            : 
                            <>      
                            <Link to='/' > <button className='agregarACarrito-detail terminar itemdetail'> Elegir mas </button> </Link>                    
                            <Link to='/cart' > <button className='agregarACarrito-detail terminar itemdetail'> Ir al Cart </button> </Link>
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