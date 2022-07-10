 //imports
import React from "react";
import "../hojas-de-estilo/Item.css";
import "../hojas-de-estilo/ItemList.css";
import Item from "./Item.jsx";

const ItemList = ({ productos }) => {	
  return (
    <div className="todasLasItem">
       {productos.map((travels) => {
            <Item maker={travels} key={travels.id} />;
          })}   
    </div>
  );
};

export default ItemList;
 