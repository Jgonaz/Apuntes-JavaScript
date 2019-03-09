//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// Jgonzalez 20180103 - Loops Asíncronos con Promises ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Todas las iteraciones deben ir ordenadas y no permitirán que comience la siguiente hasta que cada promise se haya completado.");
console.log("Haremos que la Promise devuelva éxito para las dos primeras iteraciones y error en las dos últimas");

var asyncLoop = (object) => {
	var x = -1; // Iterador
	var vuelta = () => {
		x++; // Incremento
		if (x === object.length) {
			object.callback(); // Llamada al callback cuando todas las iteraciones hayan acabado, con 'return' sale de la función.
			return;
		}
		object.darVuelta(vuelta, x); // Mientras no haya llamado al callback, damos otra vuelta.
	}
	vuelta(); // Llama a la variable función creada arriba.
}

asyncLoop({
	length: 4, // Veces que se repetirá
	darVuelta: (vuelta, x) => {

		// Utilizamos un promise que al cumplirse dará otra vuelta a la iteración con vuelta();
		new Promise((resolve, reject) => {
			console.log("Vuelta nº: " + x + ". Entramos promise, hacemos tareas durante dos segundos.");
			setTimeout(() => {
				console.log("Vuelta nº: " + x + ". Han pasado los dos segundos, resolvemos promise");
				if (x === 0 || x === 1) resolve("Exito: Dos primeras vueltas");
				else if (x === 2 || x === 3) reject("Error: Dos últimas vueltas");
				else reject("Error: Más de cuatro (4) vueltas.");
			}, 2000); 
		}).then((resolveMsg) => { // Cuando el promise se cumpla, entra aquí
			console.log("Vuelta nº: " + x + ". Promise devuelta: " + resolveMsg);
			vuelta(); // Callback para realizar la siguiente iteración de la asyncLoop, no se llamará hasta que no llegue la promesa cumplida.
		}).catch((errorMsg) => {
			console.log("Vuelta nº: " + x + ". Promise devuelta: " + errorMsg);
			vuelta();
		});

	},
	callback: () => { // Cuando el loop acabe la última vuelta
		console.log("Iteraciones completadas, callback final llamado.");
	}
}); // Fin asyncLoop