//imports
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';   
import {db} from '../firebase/firebaseConfig.js'; 
import { collection, query, getDocs, documentId, where } from "firebase/firestore";

const ItemDetailContainer = () => {
 	const [item, setItem] = useState([]);

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

	return (
		<div className='item-detail-container-estilo'>
			<h1 className='item-detail-container-estilo-h1' >Tu próximo viaje!</h1>
			<div >
			{item.map((item) => {
			return	<ItemDetail item={item} key={item.id}/> 
			})}
			</div>
		</div>

	);
};

 export default ItemDetailContainer; 

