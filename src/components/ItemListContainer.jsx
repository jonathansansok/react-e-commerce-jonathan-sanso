//imports
import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/ItemListContainer.css";
/* import { data } from "./data.js"; */
 import ItemList from "./ItemList"; 
import MainHero from "./MainHero.jsx";
import {db} from '../firebase/firebaseConfig.js'; 
import { collection, query, getDocs,/*  where */} from "firebase/firestore";
import Item from "./Item.jsx";


const ItemListContainer = ({ titulo2 }) => {
  const [productos, setProductos] = useState([]);  
  //llamo a los elementos desde firestone
  const getProductos = async () => {
    const q = query(collection(db, "travels"), /* where("categoria", "==", america) */);  
    const querySnapshot = await getDocs(q);
    const docs = [];
    //console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      docs.push({...doc.data(), id: doc.id});
    });
    //console.log(docs);
    setProductos(docs);
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
      <div className="contenedor-principal">
        <MainHero />
        <article className="tituloElige">
          <h2>{titulo2} </h2>
        </article>
        <article className="ItemListContainer-estilo"  >
          <ItemList  />;
             
        </article>
      </div>
    </>
  );
};

export default ItemListContainer;
