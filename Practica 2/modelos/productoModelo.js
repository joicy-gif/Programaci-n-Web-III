import { db } from '../config/db.js'

export const crearProducto = async (nombre, precio, stock, categoria_id) => {
  const [r] = await db.query(
    'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)',
    [nombre, precio, stock, categoria_id]
  )
  return { id: r.insertId, nombre, precio, stock, categoria_id }
}

export const obtenerProductos = async () => {
  const [rows] = await db.query(
    `SELECT p.*, c.nombre AS categoria_nombre
     FROM productos p
     JOIN categorias c ON p.categoria_id = c.id`
  )
  return rows
}

export const obtenerProductoPorId = async (id) => {
  const [rows] = await db.query(
    `SELECT p.*, c.nombre AS categoria_nombre
     FROM productos p
     JOIN categorias c ON p.categoria_id = c.id
     WHERE p.id=?`,
    [id]
  )
  return rows[0]
}

export const actualizarProducto = async (id, nombre, precio, stock, categoria_id) => {
  await db.query(
    'UPDATE productos SET nombre=?, precio=?, stock=?, categoria_id=?, fecha_act=NOW() WHERE id=?',
    [nombre, precio, stock, categoria_id, id]
  )
}

export const actualizarStock = async (id, cantidad) => {
  await db.query(
    'UPDATE productos SET stock = stock + ?, fecha_act=NOW() WHERE id=?',
    [cantidad, id]
  )
}

export const eliminarProducto = async (id) => {
  await db.query('DELETE FROM productos WHERE id=?', [id])
}