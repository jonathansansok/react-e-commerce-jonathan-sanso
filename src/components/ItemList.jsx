 //imports
import React from "react";
import "../hojas-de-estilo/Item.css";
import "../hojas-de-estilo/ItemList.css";
import Item from "./Item.jsx";

const ItemList = ({ productos }) => {	
  return ( //aqui se mapea para que se forme cada cart de los 12 productos sin categoria, todos los productos.
    <section className="todasLasItem">
      {productos.map((maker) => {
        return <Item travels={maker} key={maker.id} />
        })}   
    </section>
  );
};

export default ItemList;
