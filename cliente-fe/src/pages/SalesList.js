import React, { useEffect, useState } from "react";
import API from "../utils/api";

const SalesList = () => {
  const [sales, setSales] = useState([]);

  const load = async () => {
    const res = await API.get("/sales");
    setSales(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="container">
      <h2>Ventas</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th><th>Monto</th><th>Fecha</th><th>Cliente</th>
          </tr>
        </thead>

        <tbody>
          {sales.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.amount}</td>
              <td>{new Date(s.created_at).toLocaleString()}</td>
              <td>{s.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesList;
