import {
  crearCategoria,
  obtenerCategorias,
  obtenerCategoriaPorId,
  actualizarCategoria,
  eliminarCategoria
} from '../modelos/categoriaModelo.js'

export const postCategoria = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body
    const r = await crearCategoria(nombre, descripcion)
    res.status(201).json(r)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}

export const getCategorias = async (req, res) => {
  const datos = await obtenerCategorias()
  res.json(datos)
}

export const getCategoriaId = async (req, res) => {
  const datos = await obtenerCategoriaPorId(req.params.id)
  res.json(datos)
}

export const putCategoria = async (req, res) => {
  const { nombre, descripcion } = req.body
  await actualizarCategoria(req.params.id, nombre, descripcion)
  res.json({ message: 'Categoría actualizada' })
}

export const deleteCategoria = async (req, res) => {
  await eliminarCategoria(req.params.id)
  res.json({ message: 'Categoría eliminada' })
}