 //imports
import React from "react";
import "../hojas-de-estilo/Item.css";
import "../hojas-de-estilo/ItemList.css";
import Item from "./Item.jsx";
import { Link } from 'react-router-dom';

const ItemList = ({ travels }) => {	
  return (
    <Link to={`item/${travels.id}`} key={travels.id}>
    <div className="todasLasItem">
      {travels.map((maker) => {
        return <Item travels={maker} key={maker.id} />

          })}   
    </div>
    </Link>
  );
};

export default ItemList;

