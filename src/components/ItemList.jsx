import React, { useState, useEffect } from 'react';

import Item from './Item.jsx';


	const ItemList = ({data}) =>{

		return(		
		{data.map((productos)=> <Item key={productos.id} data={productos} />}
		)
	}

export default ItemList;
