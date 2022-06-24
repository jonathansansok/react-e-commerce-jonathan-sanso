import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemDetailContainer.css';
import {getProductById} from './data.js';
import ItemDetail from './ItemDetail.jsx';   
import {useParams} from 'react-router';

const ItemDetailContainer = () => {

	
 	const [item, setItem] = useState([]);


	let {id} = useParams();
	console.log(id);	
	 useEffect(() => {

		getProductById(id)
			.then(res=> { 
				setItem(id)
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

