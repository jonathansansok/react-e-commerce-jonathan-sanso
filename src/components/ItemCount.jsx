import {useState} from 'react';
import '../hojas-de-estilo/ItemCount.css';




const ItemCount = () => {
	const [Numero, setcounter] = useState(1);

	const sumar = () => {
		if (Numero < 10) {
		setcounter(Numero + 1);
		}else{
			alert('No puedes agregar mas de 10 pasajes');
			console.log('No puedes agregar mas de 10 pasajes');
		}
	};
	const restar = () => {
		if (Numero > 1) {
		setcounter(Numero - 1);
		}else{
			alert('No puedes solicitar 0 pasajes');
			console.log('No puedes solicitar 0 pasajes');

		}
	};

	return (
		<div className='botonera'>
			<div className='CounterSection'>
				<p>Pasajes: {Numero}</p>
				<div className='botonera-acciones'>
					<button onClick={sumar}> + </button>
					<button onClick={restar}> - </button>
				</div>
			</div>
		</div>
	);
};

 export default ItemCount; 