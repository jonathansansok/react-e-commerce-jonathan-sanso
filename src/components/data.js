export const data = [
	{ id:1, nombre: 'Sky Ocean' , pais: 'Tailandia', imagen: 'tailandia', incluye: 'Pasaje + estadia', descripcion: "Destinado a familiares y jóvenes, playa y recorridos arquitectónicos.", precio: '3050', categoria: 'Asia/Oceania', stock: 14, initial: 0 },
	{ id:2, nombre: 'Quintana Roo' , pais: 'México', imagen: 'qroo', incluye: 'Pasaje + estadia', descripcion: "7 playas con ciudades en constante movimiento.", precio: '3070', categoria: 'america', stock: 11, initial: 0  },
	{ id:3, nombre: 'Bariloche' , pais: 'Argentina', imagen: 'bariloche', incluye: 'Pasaje + estadia', descripcion: "Las mejores montañas nevadas de Latinoamerica, ski y snowboarding.", precio: '3150', categoria: 'america', stock: 14, initial: 0 },
	{ id:4, nombre: 'Riviera Maya' , pais: 'México', imagen: 'cancun', incluye: 'Pasaje + estadia', descripcion: "Playas tranquilas, noches largas, público variado.", precio: '5000', categoria: 'america', stock: 13, initial: 0  },
	{ id:5, nombre: 'Villa la Angostura' , pais: 'Argentina', imagen: 'angostura', incluye: 'Pasaje + estadia', descripcion: "Los mejores cerros y montañas, traking y lagos.", precio: '3300', categoria: 'america', stock: 9, initial: 0  },
	{ id:6, nombre: 'Tierra del Fuego' , pais: 'Argentina', imagen: 'tierradelfuego', incluye: 'Pasaje + estadia', descripcion: "Recorre el fin del mundo sur, a pie y buque.", precio: '3500', categoria: 'america', stock: 11, initial: 0  },
	{ id:7, nombre: 'Islas Fiyi' , pais: 'Rep. of Fiyi', imagen: 'fiyi', incluye: 'Pasaje + estadia', descripcion: "El encanto de Oceania y oceano pacífico.", precio: '3200', categoria: 'Asia/Oceania', stock: 11, initial: 0  },
	{ id:8, nombre: 'Isla Miyako' , pais: 'Japón', imagen: 'miyako', incluye: 'Pasaje + estadia', descripcion: "Playas, familias, cultura Japonesa.", precio: '3350', categoria: 'Asia/Oceania', stock: 12, initial: 0  },
    { id:9, nombre: 'Aspen' , pais: 'Estados Unidos', imagen: 'aspen', incluye: 'Pasaje + estadia', descripcion: "Las mejores montañas nevadas de norteamerica, ski y snowboarding.", precio: '3050', categoria: 'america', stock: 11, initial: 0  }
];


export const getProductById = (id) =>{
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if(data.length > 0)	{
				resolve(data.find(unProducto => unProducto.id === parseInt(id)))}
			else{
				reject('No hay productos')
			}
		}, 100);
	})
}

export const getProductByCategory = (categoria) =>{
	return new Promise ((resolve, reject) => {
		setTimeout(() => {
			if(data.length > 0)	{
				resolve(data.filter(unaCategoria => unaCategoria.id === (categoria)))}
			else{
				reject('No hay productos')
			}
		}, 100);
	})
}