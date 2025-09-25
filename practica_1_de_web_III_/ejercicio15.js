function sumarCallback(num1, num2, callback) {
  setTimeout(() => {
    const resultado = num1 + num2;
    callback(null, resultado);
  }, 1000);
}
function sumarPromesa(num1, num2) {
  return new Promise((resolve, reject) => {
    sumarCallback(num1, num2, (error, resultado) => {
      if (error) {
        reject(error);
      } else {
        resolve(resultado);
      }
    });
  });
}
async function calcular() {
  const resultado = await sumarPromesa(5, 3);
  console.log("El resultado es:", resultado);
}

calcular();