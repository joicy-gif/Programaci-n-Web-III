import { db } from '../config/db.js'

export const crearCategoria = async (nombre, descripcion) => {
  const [r] = await db.query(
    'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion]
  )
  return { id: r.insertId, nombre, descripcion }
}

export const obtenerCategorias = async () => {
  const [rows] = await db.query('SELECT * FROM categorias')
  return rows
}

export const obtenerCategoriaPorId = async (id) => {
  const [rows] = await db.query(
    `SELECT c.*, p.id AS producto_id, p.nombre AS producto_nombre, p.precio, p.stock
     FROM categorias c
     LEFT JOIN productos p ON c.id = p.categoria_id
     WHERE c.id = ?`,
    [id]
  )
  return rows
}

export const actualizarCategoria = async (id, nombre, descripcion) => {
  await db.query(
    'UPDATE categorias SET nombre=?, descripcion=?, fecha_act=NOW() WHERE id=?',
    [nombre, descripcion, id]
  )
}

export const eliminarCategoria = async (id) => {
  await db.query('DELETE FROM categorias WHERE id=?', [id])
}