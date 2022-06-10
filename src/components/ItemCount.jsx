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