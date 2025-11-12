//  3. Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares
//  e impares:
//  let obj = miFuncion([1,2,3,4,5])
//  console.log(obj) // { pares: [2,4], impares: [1,3,5]}

let grupos = function (numeros) {
  const par_impar = {
    pares: [],
    impares: [],
  };
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      par_impar.pares.push(numeros[i]);
    } else {
      par_impar.impares.push(numeros[i]);
    }
  }
  return par_impar;
};

let obj = grupos([1, 2, 3, 4, 5]);
console.log(obj);
