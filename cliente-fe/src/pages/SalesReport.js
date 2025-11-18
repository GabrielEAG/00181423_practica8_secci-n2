import React, { useEffect, useState } from "react";
import API from "../utils/api";

const SalesReport = () => {
  const [report, setReport] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await API.get("/sales/report");
      setReport(res.data);
    };
    load();
  }, []);

  return (
    <div className="container">
      <h2>Reporte de ventas por cliente</h2>

      <table>
        <thead>
          <tr>
            <th>Cliente</th><th>Total ventas</th>
          </tr>
        </thead>

        <tbody>
          {report.map(r => (
            <tr key={r.name}>
              <td>{r.name}</td>
              <td>{r.total_sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;
