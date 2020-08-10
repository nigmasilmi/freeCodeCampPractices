"use strict";
//learning filter, map, reduce
/* map: es un método que forma parte de los métodos de la clase array,
 recibe como argumento una call back function, la cbf se ejecuta en cada elemento
del array */

/* filter: es un método que se ejecuta sobre un array y recibe como parámetro una
callback function que genera un nuevo array con los elementos que pasaron el filtro
de las condiciones que dictaba la callback function*/

/* reduce: es un método que se ejecuta sobre un array reduce el valor del array a un sólo número,
toma una función callback como argumento y esta a su vez recibe 4 parámetros de los que 2 son requeridos,
 valorActual y total*/

let hO = function () {
  let arrayToMap = [2, 3, 4, 5, 6];
  const mapResult = arrayToMap.map(x => x + 2);
  document.getElementById('mapResult').innerHTML = mapResult;
  //document.getElementById('mapResult').innerHTML= 'cualquier cosa';

  let arrayToFilter = [43, 45, 46, 77, 74, 88, 98];
  const filtResult = arrayToFilter.filter(i => i > 50);
  document.getElementById('filtResult').innerHTML = filtResult;

  let arrayToReduce = [43, 45, 46, 77, 74, 88, 98];
  const reducedResult = arrayToReduce.reduce((acumulador, valorActual) => acumulador + valorActual);
  document.getElementById('redult').innerHTML = reducedResult;

};

/* ES6: Write Higher Order Arrow Functions */
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  let squaredIntegers = arr;
  let passedValues = arr.filter(i => Number.isInteger(i) && i > 0);
  squaredIntegers = passedValues.map(i => i * i)
  console.log('passedValues array ' + passedValues);
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
