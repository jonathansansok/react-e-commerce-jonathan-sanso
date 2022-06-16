import  React from 'react';

import Item from './Item.jsx';


 const ItemList = ({productos}) =>{

	return(
		<div>
	
	{productos.map((reco) => (
		 <Item key={reco.id} data={reco} />
	
		 ))}
		</div>
 )};

export default ItemList;
 