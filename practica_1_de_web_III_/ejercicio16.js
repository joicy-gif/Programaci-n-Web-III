function obtenerNumero() { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      resolve(110); 
    }, 1000); 
  }); 
} 
async function mostrarNumero() { 
  const numero = await obtenerNumero(); 
  console.log("Número obtenido:", numero); 
} 
 
mostrarNumero(); 