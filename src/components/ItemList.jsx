import  React from 'react';

import Item from './Item.jsx';


 const ItemList = ({productos}) =>{

	return(
	
	{productos.map((reco)=> <Item key={reco.id} data={reco} />}
	
	)
	
	}

export default ItemList;
 