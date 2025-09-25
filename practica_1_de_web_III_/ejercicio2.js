//  2. Crear una función que invierta el orden de las palabras en una frase.
//  let cad = miFuncion(“abcd”)
//  console.log(obj) // dcba

let invertir = function (texto) {
  let longitud = texto.length;
  let invertido = "";

  for (let i = 0; i < longitud; i++) {
    invertido = texto[i] + invertido;
  }
  return invertido;
};

let texto = invertir("abcde");
console.log(texto);
