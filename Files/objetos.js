//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// Jgonzalez 20190130 - Objetos JavaScript ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var var1 = 1, var2 = 1, var3 = 1; // Esto está bien
var var1 = var2 = var3 = 1; // Esto está bien en C#, no en JS.


var array = [];
array = ["1","2","3"];
array["1"].prop = "Propiedad añadida dinamicamente."; // No devuelve error, pero no agrega datos

console.log(array);


var matriz = [{ }];
matriz[0].prop = "Propiedad añadida dinamicamente."; // Esto funciona porque el primer elemento (0) se crea automáticamente.
//matriz[1].prop = "Propiedad añadida dinamicamente."; // Esto NO funciona, da error, habría que añadir antes "matriz[1] = {};"

console.log(matriz);


// Prototypes
var protoObject = function() { this.prop = "Propiedad añadida en constructor." }; // Constructor
var proto = new protoObject(); // Crear objeto

protoObject.prototype.dynamicProp = function() { return "Propiedad de protoObject añadida dinamicamente." }

console.log(proto);
console.log(proto.dynamicProp());


var objeto = {}
objeto.prop = "Propiedad añadida dinamicamente."; // Se le pueden asignar propiedades dinamicamente

console.log(objeto);


var objetoDeObjetos = {
    prop1: {
        prop11: "",
        prop12: ""
    },
    prop2: {}
}
objetoDeObjetos.prop1.prop12 = "Propiedad añadida dinamicamente.";

console.log(objetoDeObjetos);
console.log(objetoDeObjetos.prop1.prop12);