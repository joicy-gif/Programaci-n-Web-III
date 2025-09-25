function paso1(callback) { 
  setTimeout(() => { 
    console.log("Paso 1 completado"); 
    callback(); 
  }, 1000); 
} 
function paso2(callback) { 
  setTimeout(() => { 
    console.log("Paso 2 completado"); 
    callback(); 
  }, 1000); 
} 
function paso3(callback) { 
  setTimeout(() => { 
    console.log("Paso 3 completado"); 
    callback(); 
  }, 1000); 
} 
paso1(() => { 
  paso2(() => { 
    paso3(() => { 
      console.log("Todos los pasos completados"); 
    }); 
  }); 
});
 
function paso1() { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      console.log("Paso 1 completado"); 
      resolve(); 
      }, 100); 
  }); 
} 
 
function paso2() { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      console.log("Paso 2 completado"); 
      resolve(); 
    }, 1000); 
  }); 
} 
 
function paso3() { 
  return new Promise((resolve) => { 
    setTimeout(() => { 
      console.log("Paso 3 completado"); 
      resolve(); 
    }, 1000); 
  }); 
} 
 
async function ejecutarPasos() { 
  await paso1(); 
  await paso2(); 
  await paso3(); 
  console.log("Todos los pasos completados"); 
} 
ejecutarPasos(); 
    