//variable que guarda el modulo http de nodeJS
var servidor = require('http');
var url = require('url');
var fs = require('fs');

function iniciar(enrutar,manejador){
	function arrancaServidor(requiere,respuesta){

		var ruta = url.parse(requiere.url).pathname;

		if(ruta == "/" || ruta == ""){
			ruta="/index.html";
		}

		console.log("Alguien se ha conectado");

		/*enrutar(manejador,ruta,respuesta);*/

		var index = fs.readFileSync("www"+ruta);


		//registrar urls en archivo de log
		var registro = fs.createWriteStream('registro.txt',{'flags':'a'});
		registro.write(ruta + '\n')

		respuesta.writeHead(200,{"Content-Type":"text/html"});
		respuesta.write(index);
		respuesta.end;
	}
servidor.createServer(arrancaServidor).listen(8888);
}


//exportar metodos
exports.iniciar = iniciar;

