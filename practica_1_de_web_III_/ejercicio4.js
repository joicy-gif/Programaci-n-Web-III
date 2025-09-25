// 4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el
// menor, en un objeto.
// let obj = miFuncion([3,1,5,4,2])
// console.log(obj) // { mayor: 5, menor: 1 }

let may_men = function (numeros) {
  let obj = {
    mayor: -9999,
    menor: 9999,
  };

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > obj.mayor) {
      obj.mayor = numeros[i];
    }

    if (numeros[i] < obj.menor) {
      obj.menor = numeros[i];
    }
  }

  return obj;
};

let obj = may_men([3, 1, 5, 4, 2]);
console.log(obj);
