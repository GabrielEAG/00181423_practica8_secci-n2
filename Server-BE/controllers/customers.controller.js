import pool from "../config/db.js";

export const getCustomers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM customers");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Error obteniendo clientes" });
  }
};

export const searchCustomerByCode = async (req, res) => {
  try {
    const { code } = req.query;

    const result = await pool.query(
      "SELECT * FROM customers WHERE code = $1",
      [code]
    );

    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: "Error en búsqueda" });
  }
};
