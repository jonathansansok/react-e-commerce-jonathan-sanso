import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/ItemListContainer.css";

import MainHero from "./MainHero.jsx";
import { db } from "../firebase/firebaseConfig.js";
// importe db y ciertas caracteristicas de firebase
import { collection, query, getDocs, where } from "firebase/firestore";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

const Category = ({ titulo2 }) => {
  const [productos, setProductos] = useState([]);

  const { categoria } = useParams();
  //desde firestore se traen a los productos que tengan la misma categoria, el where usa para filtrar por categoria america o asia/oceanía de firestore
  //travels se llama mi coleccion de productos
  useEffect(() => {
    const getProductos = async () => {
      const q = query(
        collection(db, "travels"),
        where("categoria", "==", categoria)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductos(docs);
    };
    getProductos();
    //se toman los productos por categoria
  }, [categoria]);

  return (
    //aqui se reutiliza el MainHero e ItemList ya filtrado por categoria america o asia/oceanía
    <>
      <section className="contenedor-principal">
        <MainHero />
        <article className="tituloElige">
          <h2>{titulo2} </h2>
        </article>
        <article className="ItemListContainer-estilo">
          <ItemList productos={productos} />
        </article>
      </section>
    </>
  );
};

export default Category;
