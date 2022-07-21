import React, { useState, useEffect } from "react";
import "../hojas-de-estilo/ItemListContainer.css"; 
import MainHero from "./MainHero.jsx";
import {db} from '../firebase/firebaseConfig.js'; 
import { collection, query, getDocs,  where } from "firebase/firestore";
import ItemList from "./ItemList.jsx";
import { useParams } from 'react-router-dom';

const Category = ({ titulo2 }) => {
  const [productos, setProductos] = useState([]);  

  const  {categoria} = useParams();
  

  useEffect(() => {
	const getProductos = async () => {
		const q = query(collection(db, "travels"),  where("categoria", "==", categoria) );  
		const docs = [];
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
		  docs.push({...doc.data(), id: doc.id});
		});
		setProductos(docs);
	  };
	  getProductos();
	}, [categoria]);

  return (
    <>
      <div className="contenedor-principal">
        <MainHero />
        <article className="tituloElige" >
          <h2>{titulo2} </h2>
        </article>
        <article className="ItemListContainer-estilo" >
          <ItemList productos={productos}/>
        </article>
      </div>
    </>
  );
};

export default Category;
