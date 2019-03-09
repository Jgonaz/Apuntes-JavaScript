//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Jgonzalez 20190130 - Closures JS ////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function func1(x, y, z)
{
    console.log("Primera función: => 'x' vale: " + x + ", 'y' vale: " + y + ", 'z' vale: " + z);

    console.log("Aquí creamos una segunda función que les sume en 1 el valor, pero queremos que se ejecute DENTRO de una tercera función");
	var func2 = function(data)
	{
        console.log("Segunda función => Cambiamos el valor de las variables.");
        x += 1;
        y += 2;
        z += 3;
        console.log("Ahora la variable 'x' vale: " + x + ", 'y' vale: " + y + ", 'z' vale: " + z + ", 'data' vale: " + data);        
    }

    console.log("Llamamos a dicha tercera función en la que queremos que se ejecute la que suma en 1 el valor.");
    // Esto es un elemento 'closure', crea una simulación temporal de la función a los que poder pasar los parámetros a la función en la que queremos que se ejecute. 
    func3(function nombreDeFuncion() { return func2(data) }); 
}


function func3(func2)
{
    function declaraA(){
        data = 9;
        console.log("Tercera función => Dentro ejecutaremos la segunda función de sumas");
        console.log("Nombre: " + func2.name);
        func2();
    }
    declaraA();
}

func1(1, 2, 3);