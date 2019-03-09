//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////// Jgonzalez 20190130 - Fechas en JS ///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// String => Date

var fechaDate1 = stringToDate("30/05/2015");
var fechaDate2 = stringToDate("01/06/2015");

function stringToDate(fechaStr){
  var partsSplit = fechaStr.split("/");
  return new Date(partsSplit[2], (partsSplit[1] - 1), partsSplit[0]);
}

console.log("Fecha 1 => " + fechaDate1);
console.log("Fecha 2 => " + fechaDate2);

if(fechaDate2 > fechaDate1) console.log("Fecha 2 es mayor.")
if(fechaDate1 > fechaDate2) console.log("Fecha 1 es mayor.")
if(fechaDate1 == fechaDate2) console.log("Las fechas son iguales.")

// Date => String

function dateToString(date) {
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(date);
  return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('/');
}

console.log("Fecha 1 en formato String (DD/MM/YYYY) => " + dateToString(fechaDate1));
console.log("Fecha 2 en formato String (DD/MM/YYYY) => " + dateToString(fechaDate2));