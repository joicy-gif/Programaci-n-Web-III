import express from 'express'
import categoriaRutas from './rutas/categoriaRutas.js'
import productoRutas from './rutas/productoRutas.js'

const app = express()
app.use(express.json())

app.use('/api', categoriaRutas)
app.use('/api', productoRutas)

const puerto = 3001;
app.listen(puerto,
    () => { console.log(`Servidor en http://localhost:${puerto}`);
});
