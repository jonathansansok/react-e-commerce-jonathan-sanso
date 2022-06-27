import {useState} from 'react';
import '../hojas-de-estilo/ItemCount.css';
import { Link } from 'react-router-dom';



const ItemCount = ({stock,initial,onAdd}) => {
	const [Numero, setNumero] = useState(initial);
	const [Disponible, setDisponible] = useState(initial);
	const [onAdder, setonAdder] = useState('');
	


	const sumar = () => {
		if (Numero < stock) {
			setNumero(Numero + 1);

		}else{
			alert('No puedes agregar mas de 10 pasajes');
		}
	};
	const restar = () => {
		if (Numero > initial) {
		setNumero(Numero - 1);
		}else{
			alert('No puedes solicitar 0 pasajes');
		}
	};
	const disponible = () => {
		

	}
	
	
	const resultadoOk = () => {
		setonAdder({Numero});
		console.log(setonAdder);
	};


	return (
		<div className='CounterSection'>
			<div className='botonera-acciones'>
			<p className='botonera-pasaje'> Pasajes: </p>
				<div className='botonera-sumaresta' onClick={restar}> - </div>
				<p className='botonera-pasaje'>  {Numero}</p>
				<div className='botonera-sumaresta' onClick={sumar}> + </div>
			</div>
			<div className='botonera-sumaresta'> Stock: {{stock} - {Numero}}</div>
			<button className='agregarACarrito-detail' onClick={resultadoOk}>Agregar a carrito</button>
			{resultadoOk ? 
				<Link to="/cart"className='agregarACarrito-detail' onClick={onAdd}>Terminar Compra</Link> 
				: false }					
		</div>
	);
};

 export default ItemCount; 