import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  actualizarStock
} from '../modelos/productoModelo.js'

export const postProducto = async (req, res) => {
  const { nombre, precio, stock, categoria_id } = req.body
  const r = await crearProducto(nombre, precio, stock, categoria_id)
  res.status(201).json(r)
}

export const getProductos = async (req, res) => {
  const datos = await obtenerProductos()
  res.json(datos)
}

export const getProductoId = async (req, res) => {
  const p = await obtenerProductoPorId(req.params.id)
  res.json(p)
}

export const putProducto = async (req, res) => {
  const { nombre, precio, stock, categoria_id } = req.body
  await actualizarProducto(req.params.id, nombre, precio, stock, categoria_id)
  res.json({ message: 'Producto actualizado' })
}

export const patchStock = async (req, res) => {
  const { cantidad } = req.body
  await actualizarStock(req.params.id, cantidad)
  res.json({ message: 'Stock actualizado' })
}