
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import {data} from './data.js';
  import ItemList from './ItemList';  

const ItemListContainer = ({titulo2}) => {

	const [productos, setProductos] = useState([]);

	
	useEffect(() => {
		setTimeout(() => {
		setProductos(data)}, 2000);
	},  []);

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

