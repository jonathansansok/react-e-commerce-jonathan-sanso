//imports
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';   
import {db} from '../firebase/firebaseConfig.js'; 
import { collection, query, getDocs, documentId, where } from "firebase/firestore";
//En este componente se mapea al producto luego de que el comprador clickea en Mas Detalles

// el getProductos() es el mismo de Category.jsx e ItemListContainer.jsx
// el resto del useEffect es provisto por firebase y con where filtro por categoria.

const ItemDetailContainer = () => {
 	const [item, setItem] = useState([]);
	//se vuelve a importar el producto desde firestore
	const  {id} = useParams();

	useEffect(() => {
	const getProductos = async () => {
		const q = query(collection(db, "travels"),  where(documentId(), "==", id) );  
		const docs = [];
		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
		  docs.push({...doc.data(), id: doc.id});
		});
		setItem(docs);
	  };
	  getProductos();
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

