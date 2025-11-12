// 5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y
// al revés).
// let band = miFuncion(“oruro”)
// console.log(band) // true
// let band = miFuncion(“hola”)
// console.log(band) // false

let palidromo = function (cadena) {
  let longitud = cadena.length;
  let n;
  longitud % 2 == 0 ? (n = longitud / 2) : (n = Math.floor(longitud / 2));

  let sw = true;
  for (let i = 0; i < n; i++) {
    if (cadena[i] !== cadena[longitud - 1 - i]) {
      sw = false;
    }
  }
  return sw;
};

let obj_1 = palidromo("oruro");
console.log(obj_1);

let obj_2 = palidromo("hola");
console.log(obj_2);
