import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/ItemListContainer.css";
import { data } from "./data.js";
import ItemList from "./ItemList";
import MainHero from "./MainHero.jsx";

const ItemListContainer = ({ titulo2 }) => {
  const [productos, setProductos] = useState([]);  

  useEffect(() => {
    setTimeout(() => {
      setProductos(data);      
    }, 500);
  }, []);

  return (
    <>
      <div className="contenedor-principal">
        <MainHero />
        <article className="tituloElige">
          <h2>{titulo2} </h2>
        </article>
        <article className="ItemListContainer-estilo" key={data.id}>
          <ItemList productos={productos} />
        </article>
      </div>
    </>
  );
};

export default ItemListContainer;
