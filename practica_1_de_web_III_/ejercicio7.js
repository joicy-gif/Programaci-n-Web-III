// El arreglo de ejemplo
const numeros = [10, 20, 30, 40, 50, 60, 70];

const [primerNumero, segundoNumero, ...elResto] = numeros;

console.log(`Vector original: ${numeros}`);
console.log(primerNumero); // 10
console.log(segundoNumero); // 20
console.log(elResto); // [30, 40, 50, 60, 70]
