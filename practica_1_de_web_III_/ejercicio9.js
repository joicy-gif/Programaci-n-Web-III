const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('¡Éxito! Promesa cumplida después de 3 segundos');
    }, 3000);
});

// Aqui se uso la promesa
miPromesa
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(error => {
        console.error('Error:', error);
    });