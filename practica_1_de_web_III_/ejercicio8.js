8. //Función callback después de 2 segundos

function miCallback() {
    console.log('Callback ejecutado después de 2 segundos');
}
setTimeout(miCallback, 2000);
setTimeout(function() {
    console.log('Callback anónimo ejecutado');
}, 2000);
setTimeout(() => {
    console.log('Callback con arrow function ejecutado');
}, 2000);