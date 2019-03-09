//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// Jgonzalez 20190130 - Callbacks jQuery //////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #region Cargamos jQuery dinámicamente
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
var $ = require('jquery')(window);
// #endregion


// #region Callback único
// Declaramos el callback con la función $.Deferred();
console.log("1.1. Declaramos callback y llamamos a hacer nuestras tareas");
var callback = $.Deferred();
hacerTareas(callback);

// Esto no se ejecutará hasta que no se haya resuelto el callback
callback.done(function() { 
    console.log("1.4. Callback resuelto, done ejecutado.");
});

function hacerTareas(callback) {
    console.log("1.2. Hacemos nuestras tareas asíncronas durante tres segundos.");
    setTimeout(() => { 
        console.log("1.3. Tareas acabadas, devolvemos callback.");
        callback.resolve();
    }, 3000);
}
// #endregion Callback único


// #region Varios callbacks (when)

console.log("2.1. Llamamos a las cinco funciones que irán creando sus callbacks, cada una con un tiempo de ejecución definido.");

var d1 = $.Deferred();
var d2 = $.Deferred();
var d3 = $.Deferred();
var d4 = $.Deferred();
var d5 = $.Deferred();

hacerTareas1(); // Dos segundos
hacerTareas2(); // Tres segundos
hacerTareas3(); // Segundo y medio
hacerTareas4(); // Cuatro segundo
hacerTareas5(); // Un segundo

// Si quisiéramos que se realizaran en orden solo habría que poner varios $.when cada uno dentro del anterior.
$.when(d1, d2, d3, d4, d5).done(function(){
    console.log("2.4. Todas las tareas finalizadas, callback final resuelto, done ejecutado.");
});

function hacerTareas1() {
    console.log("2.2. Hacemos nuestras tareas (1) asíncronas durante dos segundos.");
    setTimeout(() => { 
        console.log("2.3. Tareas acabadas (1), resolvemos callback y llamamos al callback final para comprobación.");
        d1.resolve();
    }, 2000);
}

function hacerTareas2() {
    console.log("2.2. Hacemos nuestras tareas (2) asíncronas durante tres segundos.");
    setTimeout(() => { 
        console.log("2.3. Tareas acabadas (2), resolvemos callback y llamamos al callback final para comprobación.");
        d2.resolve();
    }, 3000);
}

function hacerTareas3() {
    console.log("2.2. Hacemos nuestras tareas (3) asíncronas durante segundo y medio.");
    setTimeout(() => { 
        console.log("2.3. Tareas acabadas (3), resolvemos callback y llamamos al callback final para comprobación.");
        d3.resolve();
    }, 1500);
}

function hacerTareas4() {
    console.log("2.2. Hacemos nuestras tareas (4) asíncronas durante cuatro segundos.");
    setTimeout(() => { 
        console.log("2.3. Tareas acabadas (4), resolvemos callback y llamamos al callback final para comprobación.");
        d4.resolve();
    }, 4000);
}

function hacerTareas5() {
    console.log("2.2. Hacemos nuestras tareas (5) asíncronas durante un segundo.");
    setTimeout(() => { 
        console.log("2.3. Tareas acabadas (5), resolvemos callback y llamamos al callback final para comprobación.");
        d5.resolve();
    }, 1000);
}

// #endregion Varios callbacks (when)