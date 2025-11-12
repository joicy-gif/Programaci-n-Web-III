import express from 'express'
import {
  postProducto,
  getProductos,
  getProductoId,
  putProducto,
  patchStock
} from '../controladores/productoControlador.js'

const router = express.Router()

router.post('/productos', postProducto)
router.get('/productos', getProductos)
router.get('/productos/:id', getProductoId)
router.put('/productos/:id', putProducto)
router.patch('/productos/:id/stock', patchStock)

export default router