import React, { useState } from "react";
import API from "../utils/api";
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post("/auth/signin", { email, password });
      localStorage.setItem("token", response.data.token);

      window.location.href = "/customers";
    } catch (err) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Entrar</button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
