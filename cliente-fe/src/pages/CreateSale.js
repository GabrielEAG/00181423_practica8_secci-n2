import React, { useState, useEffect } from "react";
import API from "../utils/api";

const CreateSale = () => {
  const [amount, setAmount] = useState("");
  const [idCustomer, setIdCustomer] = useState("");
  const [customers, setCustomers] = useState([]);
  const [msg, setMsg] = useState("");

  const loadCustomers = async () => {
    const res = await API.get("/customers");
    setCustomers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/sales", {
        amount,
        id_customer: idCustomer,
      });
      setMsg("Venta registrada exitosamente");
    } catch {
      setMsg("Error registrando venta");
    }
  };

  useEffect(() => { loadCustomers(); }, []);

  return (
    <div className="container">
      <h2>Registrar venta</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Monto"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select onChange={(e) => setIdCustomer(e.target.value)}>
          <option value="">Seleccione cliente</option>
          {customers.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <button type="submit">Guardar</button>
      </form>

      {msg && <p>{msg}</p>}
    </div>
  );
};

export default CreateSale;
