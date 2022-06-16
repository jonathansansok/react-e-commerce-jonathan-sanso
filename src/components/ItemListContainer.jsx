
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
 import Item from './Item.jsx'; 
import {data} from './data.js';
import ItemList from './ItemList';

const ItemListContainer = ({titulo2}) => {

	const [productos, setProductos] = useState([]);

	useEffect(() => {
		// Llamada a la api
		fetch(data)
			.then((response) => response.json())
			.then((json) => setProductos(json));

	}, []);

	return (
		<div>
            <h2>{titulo2} </h2>
			<article className="todasLasCards">
{/* 				<ItemList.jsx
				{productos.map((productos) => (
					<Item key={productos.id} data={productos} />
				))}
				/> */}
			</article> 
		</div>
	);
};

 export default ItemListContainer; 

