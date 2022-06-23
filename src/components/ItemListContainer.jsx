
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import {data} from './data.js';
  import ItemList from './ItemList';  
  import MainHero from './MainHero.jsx';
import {NavLink} from 'react-router-dom';


const ItemListContainer = ({titulo2}) => {

	const [productos, setProductos] = useState([]);
	
	useEffect(() => {
		setTimeout(() => {
		setProductos(data)}, 2000);
	},  []);

	return (
		<>
		<div className="contenedor-principal">
			<MainHero
			/>
			<article className="tituloElige">
				<h2>{titulo2} </h2>
			</article>
			<article className="ItemListContainer-estilo" key={data.data_id}>
				<NavLink to={`/item/${data.data_id}`} /* className={"ItemListContainer-estilo"} */>
				<ItemList productos={productos}
				/> 
				</NavLink>

			</article> 
		</div>
		</>
	);
};

 export default ItemListContainer; 

