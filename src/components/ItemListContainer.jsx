import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/itemListContainer.css";
import MainHero from "./MainHero.jsx";
import {db} from '../firebase/firebaseConfig.js'; 
// importe db y ciertas caracteristicas de firebase
import { collection, query, getDocs,} from "firebase/firestore";
import ItemList from "./ItemList.jsx";
//  useEffect provisto por firebase y no filtro, si no que me traigo todos los prods..
const ItemListContainer = ({ titulo2 }) => {
  const [productos, setProductos] = useState([]);  
  //travels se llama mi coleccion de productos
  //llamo a los productos de firestone
  const getProductos = async () => {
    const q = query(collection(db, "travels"),);  
    const querySnapshot = await getDocs(q);
    const docs = [];

    querySnapshot.forEach((doc) => {
      // pusheamos lo que ya hay y firestone
      docs.push({...doc.data(), id: doc.id});
    });
/*     seteamos los productos */
    setProductos(docs);
  };
/*   El array vacio se llenará con productos */
  useEffect(() => {
    getProductos();
  }, []);

  return ( //cargamos el mainhero.jsx y los productos del useState
    <> 
      <section className="contenedor-principal">
        <MainHero />
        <article className="tituloElige">
          <h2>{titulo2} </h2>
        </article>
        <article className="ItemListContainer-estilo">
          {/* // Me llevo los productos al mapeo de ItemList.jsx con parametro ({ productos }) */}
          <ItemList productos={productos}/>
        </article>
      </section>
    </>
  );
};

export default ItemListContainer;
