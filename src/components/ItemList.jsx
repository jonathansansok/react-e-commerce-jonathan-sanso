 //imports
import React from "react";
import "../hojas-de-estilo/Item.css";
import "../hojas-de-estilo/ItemList.css";
import Item from "./Item.jsx";
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {	
  return (
    <Link to={`item/${data.id}`} key={data.id}>
    <div className="todasLasItem">
      {productos.map((maker) => {
        return <Item travels={maker} key={maker.id} />

          })}   
    </div>
    </Link>
  );
};

export default ItemList;

