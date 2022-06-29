import {useState} from 'react';
import '../hojas-de-estilo/ItemCount.css';
const ItemCount = ({stock,initial,onAdd}) => {
	const [Numero, setNumero] = useState(initial);
	const [Disponible, setDisponible] = useState(stock);
	const [onAdder, setonAdder] = useState('');

	const sumar = () => {
		if (Numero < stock) {
			setNumero(Numero + 1);
			setDisponible(Disponible-1) ;
		}else{
			alert(`No puedes agregar mas de ${stock} pasajes`);
		}
	};
	const restar = () => {
		if (Numero > initial) {
		setNumero(Numero - 1);
		setDisponible(Disponible+1) ;
		}else{
			alert('No puedes solicitar 0 pasajes');
		}
	};
	
	const agregarACarrito = () => {
		setonAdder({onAdd});
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
			<div className='botonera-sumaresta stock'> Stock: {Disponible} </div>
			<button className='agregarACarrito-detail' onClick={agregarACarrito}>Agregar a carrito</button>
				
		</div>
	);
};

 export default ItemCount; 

