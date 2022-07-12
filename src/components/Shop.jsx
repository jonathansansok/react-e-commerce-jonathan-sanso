import React, { useState } from 'react';
// Firebase
import { collection, addDoc } from 'firebase/firestore';
/*  import {generarOrden()} from './Cart.jsx' */ 
import {db} from '../firebase/firebaseConfig.js'; 
import '../hojas-de-estilo/shop.css';

import TextField from '@mui/material/TextField';
import MessageSuccess from './MessageSuccess';


const initialState = {
	name: '',
	phone: '',
	email: '',
    fecha: new Date(),
/*     datosviajes : generarOrden(),  */

};

const styles = {
	containerShop: {
		textAlign: 'center',
		paddingTop: 20,
	},
};

const Shop = () => {
	const [values, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...values, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(values);
		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, 'purchases'), {
			values,
		});
		// console.log('Document written with ID: ', docRef.id);
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (

		<div style={styles.containerShop}>
			<h1>Complete y viaje</h1>
			<form className='FormContainer' onSubmit={onSubmit}>
				<TextField
					placeholder='Name'
					style={{ margin: 10, width: 400 }}
					name='name'
					value={values.name}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='Last Name'
					style={{ margin: 10, width: 400 }}
					name='phone'
					value={values.phone}
					onChange={handleOnChange}
				/>
				<TextField
					placeholder='City'
					style={{ margin: 10, width: 400 }}
					name='email'
					value={values.email}
					onChange={handleOnChange}
				/>
				<button className='agregarACarrito-detail'>FINALIZAR COMPRA</button>
			</form>
			{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
		</div>

	);
};

export default Shop;
