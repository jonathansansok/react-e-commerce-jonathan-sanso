import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/ItemListContainer.css";
import MainHero from "./MainHero.jsx";
import {db} from '../firebase/firebaseConfig.js'; 
import { collection, query, getDocs,} from "firebase/firestore";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ titulo2 }) => {
  const [productos, setProductos] = useState([]);  
  
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
        <article className="ItemListContainer-estilo" >
          <ItemList productos={productos}/>
        </article>
      </section>
    </>
  );
};

export default ItemListContainer;
