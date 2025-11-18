import pool from "../config/db.js";

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, email FROM users");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Error obteniendo usuarios" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const result = await pool.query("SELECT id, name, email FROM users WHERE id = $1", [req.params.id]);

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error obteniendo usuario" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error creando usuario" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, req.params.id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: "Error actualizando usuario" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json({ message: "Usuario eliminado" });
  } catch (err) {
    res.status(500).json({ message: "Error eliminando usuario" });
  }
};