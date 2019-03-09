//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////// Jgonzalez 20190130 - Wait's jQuery ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hay que tener jQuery cargado.
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
var $ = require('jquery')(window);


console.log("Tenemos un div con id: \"divId\"");
$('body').append('<div id="divId"></div>');

function waitAndResolve(msg) {
	$('#divId').change(async () => {
    	await new Promise(resolve => {
			console.log("Valor cambiado, devolvemos promise");
			resolve(msg);
		});
		console.log(msg);
    });
}

console.log("Esperamos tres segundos y cambiamos el valor del div");
setTimeout(() => { console.log("Cambiamos valor."), $('#divId').change(); }, 3000 ); // TODO Buscar manera de escuchar un .val()

// Solo podemos agregar 'await' dentro de una async function.
console.log("Creamos async func");
async function asyncFunc() {
  	await waitAndResolve("Resuelto.");
}
console.log("Llamamos async func");
asyncFunc();