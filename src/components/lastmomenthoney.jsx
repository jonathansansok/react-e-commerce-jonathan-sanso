{/* Ternario IF que el usuario elija la cantidad y Agregar al carrito, ELSE> volver a inicio o IR al CART */}
{cantidad===0 
? 
<div className='agregar-volver'>   
{/* //Mas destructuring */}
    <ItemCount stock={stock} initial={initial} onAdd={agregarAlCarrito}/>
    <Link to='/' > <button className='agregarACarrito-detail terminar'> Elegir mas </button> </Link>
</div>
    : 
<>      
<Link to='/'> <button className='agregarACarrito-detail terminar itemdetail'> Elegir mas </button> </Link>                    
<Link to='/cart'> <button className='agregarACarrito-detail terminar itemdetail'> Ir al Cart </button> </Link>
</>
}