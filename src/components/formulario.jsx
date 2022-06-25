import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import axios from 'axios';

//Components

import Header from './components/Header/Header';
import CardUser from './components/CardUser/CardUser';
import Spinner from './components/Spinner/Spinner';

const App = () => {
	const [value, setValue] = useState('');
	const [userData, setUserData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	console.log('USER DATA', userData);

	const onChangeValue = (e) => {
		setValue(e.target.value);
	};

	const onSubmit = (e) => {
		setIsLoading(true);
		e.preventDefault();
		const userInput = value.toLowerCase().replace(/ /g, ''); // Sanitizar la variable
		// console.log(userInput);
		if (userInput) {
			axios(`https://api.github.com/users/${userInput}`).then((res) =>
				setUserData(res.data)
			);
		}
		setTimeout(() => {
			setIsLoading(false);
		}, 100);
		setValue('');
	};

	return (
		<div className='App'>
			<Header />
			<form className='Form' onSubmit={onSubmit}>
				<TextField
					placeholder='Buscar Usuario'
					variant='outlined'
					className='TextField'
					value={value}
					onChange={onChangeValue}
				/>
				<button className='btn'>Buscar</button>
			</form>
			{/* {userData.id ? (
				<CardUser userData={userData} />
			) : (
				<p>No haz hecho una búsqueda aún</p>
			)} */}
			{/* {userData.id ? <CardUser userData={userData} /> : null} */}
			{isLoading ? (
				<Spinner />
			) : (
				userData.id && <CardUser userData={userData} />
			)}
		</div>
	);
};

export default App;
