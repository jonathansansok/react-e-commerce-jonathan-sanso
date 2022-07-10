import React from "react";
import "../hojas-de-estilo/Item.css";
import { Link } from "react-router-dom";

function Item({ maker }) {         

  return (
    <Link to={`/item/${maker.id}`} className="li_per contenedor-Item">
      <div className="anyTravel">
        <img
          className="imagen-Item"
          src={`./imagenes/${maker.imagen}.jpg`}
          alt={maker.imagen}
        />
      </div>
      <div className="contenedor-texto-Item">
        <p className="nombre-Item">
          <strong>
            {maker.nombre} en {maker.pais}
          </strong>
        </p>
        <p className="incluye-Item">{maker.incluye}</p>

        <p className="precio-Item">US$ {maker.precio}.-</p>
         <div className='agregarACarrito'> Mas detalles</div> 
      </div>
    </Link>
  );
}

export default Item;
