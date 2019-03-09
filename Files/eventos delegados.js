//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////// Jgonzalez 20190130 - Eventos a elementos dinámicos ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Hay que tener jQuery cargado.
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
var $ = require('jquery')(window);


// #region SIN Eventos Delegados

// Primero creamos el botón que va a llevar el evento.
$('body').append('<button type="button" id="firstBtn" class="btn">Botón Nº1</button>');

// Ahora asignamos el evento a las clases .btn (antes de crear el segundo botón)
$('.btn').on('click', function(){
    console.log("Simulado el click de: " + $(this).text() + ' (no llegará a hacer el click del segundo botón)');
});

// Simulamos click al primer botón.
$('#firstBtn').click();

// Creamos dinamicamente con jQuery un segundo botón.
$('body').append('<button type="button" id="secondBtn" class="btn">Botón Nº2</button>');

// Simulamos click al segundo botón y NO hará la función de cambio ya que se añadió dinamicamente después.
$('#secondBtn').click();

// #endregion SIN Eventos Delegados


// #region CON Eventos Delegados

// Primero creamos el botón que va a llevar el evento.
$('body').append('<div id="divTest"></div>');
$('#divTest').append('<button type="button" id="thirdBtn" class="delegatedBtn">Botón Nº3</button>');

// Ahora asignamos el evento, y usando un evento delegado al parent todos los elementos que se vayan creando dinamicamente 
// incluso después de llamar a esta función tendrán el mismo evento asignado.
$('#divTest').on('click', 'a, button', function(){
    console.log("Simulado el click de: " + $(this).text());
});

// Simulamos click al primer botón.
$('#thirdBtn').click();
// Creamos dinamicamente con jQuery un segundo botón
$('#divTest').append('<button type="button" id="fourthBtn" class="delegatedBtn">Botón Nº4</button>');
// Simulamos click al segundo botón y también hará la función de cambio.
$('#fourthBtn').click();
// Ahora probamos con anchors
$('#divTest').append('<a id="aBtn">Botón Anchor</button>');
// Simulamos el click al anchor
$('#aBtn').click();

// #endregion CON Eventos Delegados