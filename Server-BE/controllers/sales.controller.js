import pool from "../config/db.js";

export const createSale = async (req, res) => {
  try {
    const { amount, id_customer } = req.body;

    const check = await pool.query(
      "SELECT id FROM customers WHERE id = $1",
      [id_customer]
    );

    if (check.rows.length === 0)
      return res.status(400).json({ message: "Cliente no existe" });

    await pool.query(
      "INSERT INTO sales (amount, created_at, id_customer) VALUES ($1, NOW(), $2)",
      [amount, id_customer]
    );

    res.json({ message: "Venta registrada" });
  } catch (err) {
    res.status(500).json({ message: "Error creando venta" });
  }
};

export const getSales = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT s.id, s.amount, s.created_at, c.name 
       FROM sales s 
       JOIN customers c ON s.id_customer = c.id`
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Error obteniendo ventas" });
  }
};

export const salesReport = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT c.name, SUM(s.amount) AS total_sales
       FROM sales s 
       JOIN customers c ON s.id_customer = c.id
       GROUP BY c.name`
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Error en reporte" });
  }
};
