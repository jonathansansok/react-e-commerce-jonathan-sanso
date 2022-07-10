 //imports
import React from "react";
import "../hojas-de-estilo/Item.css";
import "../hojas-de-estilo/ItemList.css";
import Item from "./Item.jsx";

const ItemList = ({ productos }) => {	
  return (
    <div className="todasLasItem">
      {productos.map((maker) => {
        return <Item travels={maker} key={maker.id} />
          })}   
    </div>
  );
};

export default ItemList;

