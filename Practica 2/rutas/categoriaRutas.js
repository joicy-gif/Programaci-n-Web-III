import express from 'express'
import {
  postCategoria,
  getCategorias,
  getCategoriaId,
  putCategoria,
  deleteCategoria
} from '../controladores/categoriaControlador.js'

const router = express.Router()

router.post('/categorias', postCategoria)
router.get('/categorias', getCategorias)
router.get('/categorias/:id', getCategoriaId)
router.put('/categorias/:id', putCategoria)
router.delete('/categorias/:id', deleteCategoria)

export default router