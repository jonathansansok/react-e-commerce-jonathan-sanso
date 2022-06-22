import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import {getProductById} from './data.js';
import ItemDetail from './ItemDetail.jsx';   

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);	
	const [loading, setLoading] = useState(true);
	const id = 4;	
	useEffect(() => {

		getProductById(id)

			.then(res=> { 
						setItem(res)
						setLoading(false)
			})
			.catch(err=>console.log(err))
	}, []);
	return (
		<>
		<h1>ITEM DETAIL</h1>
		{loading ? <div>Cargando...</div>
		:<ItemDetail item={item}	/>
		}
		</>
	);
};

 export default ItemDetailContainer; 

