

function inicio(respuesta){
	console.log("Has entrado en pagina de inicio");

	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("<h1>Has entrado en pagina de inicio</h1>");
	respuesta.end;
}

function pagina1(respuesta){
	console.log("Has entrado en pagina 1");
	
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("<h1>Has entrado en la pagina 1</h1>");
	respuesta.end;
}

function pagina2(respuesta){
	console.log("Has entrado en pagina 2");
	
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("<h1>Has entrado en la pagina 2</h1>");
	respuesta.end;
}

function favicon(respuesta){
	console.log("Se ha llamado a la función favicon");
	
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	respuesta.write("");
	respuesta.end;

}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;