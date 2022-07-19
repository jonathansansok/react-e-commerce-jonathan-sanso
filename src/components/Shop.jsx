import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { useCartContext } from './CartContext.jsx'; 
import {db} from '../firebase/firebaseConfig.js'; 
import '../hojas-de-estilo/shop.css';
import TextField from '@mui/material/TextField';
import MessageSuccess from './MessageSuccess.jsx';


const Shop = () => {

	const {
		cartList,
		totalAPagar,
		} = useCartContext()

	const generarOrden =  () => {
		// Nuevo objeto de orders    
		let items = [];
		cartList.forEach((item) => items.push({id: item.id, title: item.titulo, price: item.precio, quantity: item.initial}));
		return items;
	}

	const initialState = {
		name: '',
		phone: '',
		email: '',
	};
	const styles = {
		containerShop: {
		textAlign: 'center',
		paddingTop: 20,
		},
	};

	const [buyer, setValues] = useState(initialState);
	// Este estado está destinado a guardar el id de la compra
	const [purchaseID, setPurchaseID] = useState('');

	const handleOnChange = (e) => {
		const { value, name } = e.target;
		setValues({ ...buyer, [name]: value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const docRef = await addDoc(collection(db, 'purchases'), {
			buyer,
			fecha: new Date(),
			totalPagar: totalAPagar(),
			items:  generarOrden(),
		});
		setPurchaseID(docRef.id);
		setValues(initialState);
	};

	return (
		<div style={styles.containerShop}>
			{purchaseID ?   (
				<>
					{purchaseID && <MessageSuccess purchaseID={purchaseID} />}
					<button className='agregarACarrito-detail'>VOLVER A INICIO</button>
					<p>*Podria hacer desaparecer el Cart-Detalles para mas visual </p>
				</>
				)
				:
				(
				<>
					<h1>Complete y viaje</h1>
					<form className='FormContainer' onSubmit={onSubmit}>
						<TextField
							placeholder='Name'
							style={{ margin: 10, width: 400 }}
							name='name'
							value={buyer.name}
							onChange={handleOnChange}
							required
						/>
						<TextField
							placeholder='Phone'
							style={{ margin: 10, width: 400 }}
							name='phone'
							value={buyer.phone}
							onChange={handleOnChange}
							required
						/>
						<TextField
							placeholder='City'
							style={{ margin: 10, width: 400 }}
							name='email'
							value={buyer.email}
							onChange={handleOnChange}
							required
						/>
						<button className='agregarACarrito-detail'>FINALIZAR COMPRA</button>
					</form>
				</>
			)
			}
		</div>
	);
};

export default Shop;
