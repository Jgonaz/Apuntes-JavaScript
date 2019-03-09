//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Jgonzalez 20190130 - Callbacks Vanilla JS ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var x = 1; // 1 para resolver, 2 u otro para controlar error.

// Declaramos la promise.
var miPromesa = new Promise((resolve, reject) => {
    console.log("1. Declaramos promise y llamamos a hacer nuestras tareas");
    hacerTareas(resolve, reject);
});

// Esto no se ejecutará hasta que no se haya resuelto la promesa.
miPromesa.then((successMessage) => {
    console.log("4. Promise resuelta, mensaje de resolve: " + successMessage);
}).catch(errorMessage => {
    console.log("4. Promise rechazada, error devuelto: " + errorMessage);
});

function hacerTareas(resolve, reject) {
    console.log("2. Hacemos nuestras tareas asíncronas durante tres segundos.");
    setTimeout(function(){
        console.log("3. Tareas acabadas, resolvemos promise.");
        if (x === 1) resolve("Promise resuelta"); // Llama a la función .then()
        else if (x === 2) reject("Promise rechazada"); // Llama a la función .catch()
        else reject("Variable no controlada"); // Llama a la función .catch()
    }, 3000);
}