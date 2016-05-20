function enrutar(manejador,ruta,respuesta){
	console.log("Voy a rutear algo para "+ruta);

if(typeof manejador[ruta] === 'function'){
	return manejador[ruta](respuesta);
}
	console.log("No existe una función para la ruta "+ruta);
}

exports.enrutar = enrutar; 