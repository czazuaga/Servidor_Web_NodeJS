var servidor = require("./servidor.js");
var enrutador = require("./enrutador.js");
var peticiones = require("./peticiones.js");

//manejador es una lista de elementos
var manejador = {}
manejador['/'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;
manejador['/favicon.ico'] = peticiones.favicon;

//llamada a los metodos exportados por el script serrvidor.js
servidor.iniciar(enrutador.enrutar,manejador);


