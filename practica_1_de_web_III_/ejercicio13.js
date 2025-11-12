function promesaBasica() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Datos de la promesa');
        }, 1000);
    });
}
function promesaACallback(callback) {
    promesaBasica()
        .then(resultado => {
            callback(null, resultado);
        })
        .catch(error => {
            callback(error, null);
        });
}
promesaACallback((error, resultado) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Resultado:', resultado);
    }
});