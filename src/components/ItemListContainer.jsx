
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
/*   import Item from './Item.jsx';     */
import {data} from './data.js';
  import ItemList from './ItemList';  

const ItemListContainer = ({titulo2}) => {

	const [productos, setProductos] = useState([]);
	console.log(data); // Trae bien los objetos/cards de data.js
	useEffect(() => {
		setProductos(data)
	}, []);

	return (
		<>
		<article className="tituloElige">
            <h2>{titulo2} </h2>
		</article>
			<article className="ItemListContainer-estilo">
			 <ItemList productos={productos}
			 /> 
			</article> 

		</>
	);
};

 export default ItemListContainer; 

