import React from "react";
import "../hojas-de-estilo/Item.css";
import { Link } from "react-router-dom";

function Item({ data }) {         
  return (
    <Link to={`/item/${data.id}`} className="li_per contenedor-Item">
      <div className="anyTravel">
        <img
          className="imagen-Item"
          src={`./imagenes/img-${data.imagen}.jpg`}
          alt={data.imagen}
        />
      </div>
      <div className="contenedor-texto-Item">
        <p className="nombre-Item">
          <strong>
            {data.nombre} en {data.pais}
          </strong>
        </p>
        <p className="incluye-Item">{data.incluye}</p>

        <p className="precio-Item">US$ {data.precio}.-</p>
         <div className='agregarACarrito'> Mas detalles</div> 
      </div>
    </Link>
  );
}

export default Item;
