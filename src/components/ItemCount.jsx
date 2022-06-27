import {useState} from 'react';
import '../hojas-de-estilo/ItemCount.css';
import { Link } from 'react-router-dom';



const ItemCount = ({stock,initial,onAdd}) => {
	const [Numero, setNumero] = useState(initial);
	const [Disponible, setDisponible] = useState(stock);
	const [onAdder, setonAdder] = useState('');
	


	const sumar = () => {
		if (Numero < stock) {
			setNumero(Numero + 1);
	/* 		acá se actualiza el stock tambien */
		}else{
			alert('No puedes agregar mas de 10 pasajes');
		}
	};
	const restar = () => {
		if (Numero > initial) {
		setNumero(Numero - 1);
			/* 		acá se actualiza el stock tambien */
		}else{
			alert('No puedes solicitar 0 pasajes');
		}
	};
	const disponible = () => {
		

	}
	
	
	const toCartAction = () => {
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
			<div className='botonera-sumaresta'> Stock: {stock }</div>
			<button className='agregarACarrito-detail' onClick={toCartAction}>Agregar a carrito</button>
			{toCartAction ? 
				<Link to="/cart" className='agregarACarrito-detail' >Terminar Compra</Link> 
				: false }					
		</div>
	);
};

 export default ItemCount; 