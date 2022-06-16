
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
  import Item from './Item.jsx';   
import {data} from './data.js';
/*  import ItemList from './ItemList';  */

const ItemListContainer = ({titulo2}) => {

	const [productos, setProductos] = useState([]);
	console.log(data, productos); // Trae bien los objetos/cards de data.js
	useEffect(() => {
		// Llamada a la api
		fetch(data)
			.then((response) => response.json())
			.then((json) => setProductos(json));

	}, []);

	return (
		<article className="tituloElige">
            <h2>{titulo2} </h2>
			<article className="todasLasItem">
			 <Item data={productos}
			 /> 
			</article> 
        </article>
	);
};

 export default ItemListContainer; 

