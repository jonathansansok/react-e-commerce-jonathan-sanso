export const data = [
	{ id: 1, nombre: 'Sky Ocean' , pais: 'Tailandia', imagen: 'tailandia', incluye: 'Pasaje + estadia', descripcion: "todo viajeok", precio: '3050', categoria: 'Asia/Oceania' },
	{ id: 2, nombre: 'Quintana Roo' , pais: 'México', imagen: 'qroo', incluye: 'Pasaje + estadia', descripcion: "todo viajeok", precio: '3050', categoria: 'america' },
	{ id: 3, nombre: 'Bariloche' , pais: 'Argentina', imagen: 'bariloche', incluye: 'Pasaje + estadia', descripcion: "todo viajeok", precio: '2800', categoria: 'america' },
	{ id: 4, nombre: 'Cancun y Riviera Maya' , pais: 'México', imagen: 'cancun', incluye: 'Pasaje + estadia', descripcion: "todo viajeok", precio: '5000', categoria: 'america' },
	{ id: 5, nombre: 'Villa la Angostura' , pais: 'Argentina', imagen: 'angostura', incluye: 'Pasaje + estadia', descripcion: "todo viajeok", precio: '3300', categoria: 'america' },
	{ id: 6, nombre: 'Tierra del Fuego' , pais: 'Argentina', imagen: 'tierradelfuego', incluye: 'Pasaje + estadia', descripcion: "todo viajeok", precio: '3500', categoria: 'america' },
	{ id: 7, nombre: 'Islas Fiyi' , pais: 'Rep. of Fiyi', imagen: 'fiyi', incluye: 'Pasaje + estadia', descripcion: "todo viajeok", precio: '3200', categoria: 'Asia/Oceania' },
	{ id: 8, nombre: 'Isla Miyako' , pais: 'Japón', imagen: 'miyako', incluye: 'Pasaje + estadia', descripcion: "todo viajeok", precio: '3350', categoria: 'Asia/Oceania' },
    { id: 9, nombre: 'Aspen' , pais: 'Estados Unidos', imagen: 'aspen', incluye: 'Pasaje + estadia', descripcion: "todo viajeok", precio: '3050', categoria: 'america' }
];


export const getProductById = (id) =>{
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if(data.length > 0)	{
				resolve(data.find(unProducto => unProducto.id === parseInt(id)))}
			else{
				reject('No hay productos')
			}
		}, 2000);
	})
}