//imports
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemDetailContainer.css';
/* import {getProductById} from './data.js'; */
import ItemDetail from './ItemDetail.jsx';   
import {useParams} from 'react-router';
import {db} from '../firebase/firebaseConfig.js'; 
import { collection, query, getDocs,/*  where */} from "firebase/firestore";

const ItemDetailContainer =  async () => {	

 	const document = doc(db, "travels", idtravels)                  

	const response = await getDocs(document)            
	 
	const doc = {id: response.id, ...id.data()}
	
	return (
		<div className='item-detail-container-estilo'>
			<h1 className='item-detail-container-estilo-h1' >Tu próximo viaje!</h1>
			<div key={travels.id}>
			<ItemDetail travels={travels}/> 
			</div>
		</div>
	);
};

 export default ItemDetailContainer; 

