// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros(i) {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    var acumulador= 0;
    for (var i= 1; i<11; i++) {acumulador += i;} return acumulador;}


function encuentraPares (array) {
  // Devuelve un arreglo con los pares encontrados
 var resultado=[];
 var indice=0;
 while (indice < array.length){ if(array[indice]%2===0){resultado.push(array[indice]); 
}indice++;}return resultado;}

  


function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
var resultado= [];
for (var i=0; i <array.length ;i++){resultado.push(Math.pow(array[i],2))}; return resultado;};




function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  var resultado=array.reduce (function(acumulador,num){return acumulador + num;},0);return resultado;
}

function numeroDigitos(num){
  var numeroaString=num + "";
  return numeroaString.length

}

  // Devuelve el número de dígitos de un número dado
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
