import React, { useState, useEffect } from 'react';

import Item from './Item.jsx';

const CardList = () => {
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
			<h1>Github Users</h1>
			{users.map((user) => (
				<Item key={user.id} data={user} />
			))}
		</div>
	);
};

export default CardList;
