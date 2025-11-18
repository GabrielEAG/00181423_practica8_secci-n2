import { Link } from "react-router-dom";

const NavBar = () => {
  // Si no hay token, no hay navbar. Simple.
  const token = localStorage.getItem("token");

  if (!token) return null;

  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/customers">Clientes</Link>
      <Link style={styles.link} to="/sales">Ventas</Link>
      <Link style={styles.link} to="/sales/create">Registrar Venta</Link>
      <Link style={styles.link} to="/sales/report">Reporte</Link>

      <button
        style={styles.logout}
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Cerrar sesión
      </button>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#222",
    color: "white",
    alignItems: "center"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  },
  logout: {
    marginLeft: "auto",
    background: "crimson",
    color: "#fff",
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    borderRadius: "4px"
  }
};

export default NavBar;
