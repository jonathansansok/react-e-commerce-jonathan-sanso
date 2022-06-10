import {useState} from 'react';
import '../hojas-de-estilo/ItemCount.css';




const ItemCount = () => {
	const [Numero, setcounter] = useState(0);

	const sumar = () => {
		setcounter(Numero + 1);

	};

	const restar = () => {
		setcounter(Numero - 1);
	};

	return (
		<div className='botonera'>
			<div className='CounterSection'>
				<p>cantidad: {Numero}</p>
				<div className='botonera-acciones'>
					<button onClick={sumar}>Incrementar</button>
					<button onClick={restar}>Decrementar</button>
				</div>
			</div>
		</div>
	);
};

 export default ItemCount; 