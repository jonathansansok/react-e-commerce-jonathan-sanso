
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import Item from './Item.jsx';
/* import data from './data.js'; */



const ItemListContainer = ({titulo2}) => {

	const [productos, setProductos] = useState([]);

	useEffect(() => {
		// Llamada a la api
		fetch('./data.js')
			.then((response) => response.productos())
			.then((productos) => setProductos(productos));
	}, []);

	return (
		<div>
            <h2>{titulo2} </h2>
			{productos.map((productos) => (
				<Item key={productos.id} data={productos} />
			))}
		</div>
	);
};

 export default ItemListContainer; 

