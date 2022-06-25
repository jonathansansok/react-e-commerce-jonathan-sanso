import {useState} from 'react';
import '../hojas-de-estilo/ItemCount.css';
import { NavLink } from 'react-router-dom';



const ItemCount = ({stock,initial,onAdd}) => {
	const [Numero, setNumero] = useState(initial);
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
	const resultadoOk = () => {
		setonAdder({Numero});
		console.log(setonAdder);
	};

	return (
	/* 	<Router> */
			<div className='botonera'>
				<div className='CounterSection'>
					<p className='botonera-pasaje'> Pasajes: </p>
					<div className='botonera-acciones'>
						<div className='botonera-sumaresta' onClick={restar}> - </div>
						<p className='botonera-pasaje'>  {Numero}</p>
						<div className='botonera-sumaresta' onClick={sumar}> + </div>
					</div>
					<NavLink to="/cart"className='agregarACarrito-detail' onClick={resultadoOk}>Agregar a carrito</NavLink>
				</div>
			</div>

	);
};

 export default ItemCount; 