import React, { useState } from 'react';
import '../hojas-de-estilo/ItemCount.css';




const ItemCount = () => {
	const [counter, setcounter] = useState(0);

	const handlerCounterUp = () => {
		setcounter(counter + 1);
		// alert('Hello World');
	};

	const handlerCounterMinus = () => {
		setcounter(counter - 1);
	};

	return (
		<div className='App'>
			<Header title={title} subtitle='Soy un subtitulo por props' />
			<p>User Name: {name}</p>

			<button onClick={handlerUpdateName}>Actualizar Nombre</button>
			<div className='UserSection'>
				<CardComponent
					name='Daniel Di Salvo'
					date='Se unio en Enero 2021'
					description='Front-end Developer y profesor del Curso de React.js en CoderHouse'
					img='https://react.semantic-ui.com/images/avatar/large/matthew.png'
				/>
				<CardComponent
					name='Raul Gutierrez'
					date='Se unió en Abril 2021'
					description='Scrum Master y UX Designer en Mercado Libre'
					img='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
				/>
				<CardComponent
					name='Francesca Bertotti'
					date='Se unió en Julio 2021'
					description='DevOps y profesora del curso de React.js en CoderHouse'
					img='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'
				/>
			</div>
			<div className='CounterSection'>
				<p>Counter: {counter}</p>
				<div className='btn-section'>
					<button onClick={handlerCounterUp}>Incrementar</button>
					<button onClick={handlerCounterMinus}>Decrementar</button>
				</div>
			</div>
		</div>
	);
};

 export default ItemCount; 