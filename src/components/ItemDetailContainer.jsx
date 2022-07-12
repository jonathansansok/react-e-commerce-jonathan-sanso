//imports
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemDetailContainer.css';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail.jsx';   
import {useParams} from 'react-router';
import {db} from '../firebase/firebaseConfig.js'; 



const ItemDetailContainer = () => {
 	const [item, setItem] = useState([]);
	let {id} = useParams();

	 useEffect(() => {
		getProductById(id)
			.then(res=> { 
				setItem(res);
			})
			.catch(err=>console.log(err))
	}, [id]); 
	
	return (
		<div className='item-detail-container-estilo'>
			<h1 className='item-detail-container-estilo-h1' >Tu próximo viaje!</h1>
			<div key={item.id}>
			<ItemDetail item={item}/> 
			</div>
		</div>
	);
};

 export default ItemDetailContainer; 

