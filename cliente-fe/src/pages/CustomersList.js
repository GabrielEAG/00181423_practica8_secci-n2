import React, { useEffect, useState } from "react";
import API from "../utils/api";

const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  const load = async () => {
    const res = await API.get("/customers");
    setCustomers(res.data);
  };

  useEffect(() => { load(); }, []);

  return (
    <div className="container">
      <h2>Clientes</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th><th>Nombre</th><th>Dirección</th>
            <th>Teléfono</th><th>Código</th>
          </tr>
        </thead>

        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.address}</td>
              <td>{c.phone}</td>
              <td>{c.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersList;
