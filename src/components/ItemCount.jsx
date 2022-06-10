import {useState} from 'react';
import '../hojas-de-estilo/ItemCount.css';


<ItemCount stock={10} initial={1} />

const ItemCount = ({stock,initial}) => {
	const [Numero, setNumero] = useState(initial);

	const sumar = () => {
		if (Numero < stock) {
			setNumero(Numero + 1);
		}else{
			alert('No puedes agregar mas de 10 pasajes');
			console.log('No puedes agregar mas de 10 pasajes');
		}
	};
	const restar = () => {
		if (Numero > initial) {
		setNumero(Numero - 1);
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