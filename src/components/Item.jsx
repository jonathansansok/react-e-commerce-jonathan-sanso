import React from "react";
import "../hojas-de-estilo/item.css";
import { Link } from "react-router-dom";

function Item({ travels }) {     
  //APLICO DESTRUCTURING  
    const  {id, imagen, titulo, pais, incluye, precio} = travels;
  return ( //se cargan todos los campos de cada card, a travez de su ID para cada producto que ya venian desde firestone/ItemListContainer... 
  // el Link toma el ID del producto en particular
  //renderizo en pantalla todo:
    <Link to={`/item/${id}`} className="li_per contenedor-Item">
      <div className="anyTravel">
        <img
          className="imagen-Item"
          src={imagen}
          alt={imagen}
        />
      </div>
      <div className="contenedor-texto-Item">
        <p className="nombre-Item">
          <strong>
            {titulo} en {pais}
          </strong> 
        </p>
        <p className="incluye-Item">{incluye}</p>
        <p className="precio-Item">US$ {precio}.-</p>
         <div className='agregarACarrito'> Mas detalles</div> 
      </div>
    </Link>
  );
}

export default Item;
