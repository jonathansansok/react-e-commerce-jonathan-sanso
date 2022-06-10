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
				<p className='botonera-pasaje'> Pasajes: </p>
				<div className='botonera-acciones'>
					<div className='botonera-sumaresta' onClick={restar}> - </div>
					<p className='botonera-pasaje'>  {Numero}</p>
					<div className='botonera-sumaresta' onClick={sumar}> + </div>

				</div>
			</div>
		</div>
	);
};

 export default ItemCount; 