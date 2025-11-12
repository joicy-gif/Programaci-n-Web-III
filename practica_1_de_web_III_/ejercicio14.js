
function leerArchivoPromesa(ruta) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ruta === "valido.txt") {
        resolve("Contenido del archivo");
      } else {
        reject("Archivo no encontrado");
      }
    }, 1000);
  });
}
function leerArchivoCallback(ruta, callback) {
  leerArchivoPromesa(ruta)
    .then(resultado => callback(null, resultado))
    .catch(error => callback(error, null));
}
leerArchivoCallback("valido.txt", (error, contenido) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Contenido:", contenido);
  }
});