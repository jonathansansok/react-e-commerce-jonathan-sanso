
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import Item from './Item.jsx';




const ItemListContainer = ({titulo2}) => {

	const [users, setUsers] = useState([]);

	console.log('DATA:', users);

	useEffect(() => {
		// Llamada a la api
		fetch('data.js')
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);

	return (
		<div>
            <h2>{titulo2} </h2>

			{users.map((user) => (
				<Item key={user.id} data={user} />
			))}
		</div>
	);
};

 export default ItemListContainer; 

