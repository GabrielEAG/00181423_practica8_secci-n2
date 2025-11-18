import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import CustomersList from "./pages/CustomersList";
import SalesList from "./pages/SalesList";
import CreateSale from "./pages/CreateSale";
import SalesReport from "./pages/SalesReport";

import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>

      {/* Barra de navegación siempre antes de las rutas */}
      <NavBar />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/customers"
          element={<ProtectedRoute><CustomersList /></ProtectedRoute>}
        />

        <Route
          path="/sales"
          element={<ProtectedRoute><SalesList /></ProtectedRoute>}
        />

        <Route
          path="/sales/create"
          element={<ProtectedRoute><CreateSale /></ProtectedRoute>}
        />

        <Route
          path="/sales/report"
          element={<ProtectedRoute><SalesReport /></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
