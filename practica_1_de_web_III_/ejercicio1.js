//  1. Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el
//  resultado en un objeto.
//  let obj = miFuncion(“euforia”)
//  console.log(obj) // { a: 1, e: 1, i: 1, o: 1, u: 1 }

let contar = function (texto) {
  const conteo = { a: 0, e: 0, i: 0, o: 0, u: 0 };

  for (const caracter of texto) {
    if (caracter === "a") {
      conteo.a++;
    }
    if (caracter === "e") {
      conteo.e++;
    }
    if (caracter === "i") {
      conteo.i++;
    }
    if (caracter === "o") {
      conteo.o++;
    }
    if (caracter === "u") {
      conteo.u++;
    }
  }
  return conteo;
};

let miConteo = contar("euforia");
console.log(miConteo);
