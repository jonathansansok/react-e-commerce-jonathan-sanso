//imports
import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemDetailContainer.css';
import { useParams } from 'react-router';
import ItemDetail from './ItemDetail.jsx';   
/* import {useParams} from 'react-router'; */
import {db} from '../firebase/firebaseConfig.js'; 
/* import {getProductById} from './data.js'; */


const ItemDetailContainer = () => {
 	const [item, setItem] = useState([]);
	const  {id} = useParams();

	console.log(id);
	const getProductos = async () => {
		const q = query(collection(db, "travels"), /* where("categoria", "==", america) */);  
		const querySnapshot = await getDocs(q);
		const docs = [];
		//console.log(querySnapshot);
	
		querySnapshot.forEach((doc) => {
		  // doc.data() is never undefined for query doc snapshots
		  docs.push({...doc.data(), id: doc.id});
		});
		console.log(docs);
		setItem(docs);
	  };

	  useEffect(() => {
		getProductos();
	  }, []);

	/*  useEffect(() => {
		getProductById(id)
			.then(res=> { 
				setItem(res);
			})
			.catch(err=>console.log(err))
	}, [id]);  */
	
	return (
		<div className='item-detail-container-estilo'>
			<h1 className='item-detail-container-estilo-h1' >Tu próximo viaje!</h1>
			<div key={item.id}>
			<ItemDetail item={item}/> 
			</div>
		</div>
	);
};

 export default ItemDetailContainer; 

