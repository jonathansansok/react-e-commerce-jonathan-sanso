//imports
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/itemDetailContainer.css';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';   
import {db} from '../firebase/firebaseConfig.js'; 
import { collection, query, getDocs, documentId, where } from "firebase/firestore";
// importe db y ciertas caracteristicas de firebase
//En este componente se mapea al producto luego de que el comprador clickea en Mas Detalles

//  useEffect provisto por firebase y con where filtro por ID del producto.
  //travels se llama mi coleccion de productos
const ItemDetailContainer = () => {
 	const [item, setItem] = useState([]);
	//como el id es dinámico se uso useParams
	const  {id} = useParams();
	//se vuelve a importar el producto desde firestore
	useEffect(() => {
	const getProductos = async () => {
		const q = query(collection(db, "travels"),  where(documentId(), "==", id) );  
		const docs = [];
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
		  docs.push({...doc.data(), id: doc.id});
		});
		setItem(docs);
		//se mandan al useState los docs que serian el producto por id.
	  };
	  getProductos();
	  // por ID se llanará con un producto.
	}, [id]);

	return ( //mapeo del producto que sirve a ItemDetail.jsx
		<section className='item-detail-container-estilo'>
			<h1 className='item-detail-container-estilo-h1' >Tu próximo viaje!</h1>
			<article >
				{item.map((item) => {
				return	<ItemDetail item={item} key={item.id}/> 
				})}
			</article>
		</section>
	);
};

export default ItemDetailContainer; 

