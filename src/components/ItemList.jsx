 //imports
import React from "react";
import Item from "./Item.jsx";
import "../hojas-de-estilo/Item.css";
import "../hojas-de-estilo/ItemList.css";

const ItemList = ({ productos }) => {	
  return (
    <div className="todasLasItem">
      {productos.map((travel) => {
        return <Item maker={travel} key={travel.id} />;
        })}   
    </div>
  );
};

export default ItemList;
 