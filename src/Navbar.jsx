// src/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cerrarSesion }) {
  const styles = {
    nav: { display: "flex", padding: "10px 20px", backgroundColor: "#ED6D4A", color: "#fff" },
    link: { marginRight: "16px", color: "#fff", textDecoration: "none" },
    button: { marginLeft: "auto", backgroundColor: "#fff", color: "#ED6D4A", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" }
  };

  return (
    <nav style={styles.nav}>
      <Link style={styles.link} to="/ofertas">Ofertas</Link>
      <Link style={styles.link} to="/perfil">Perfil</Link>
      <Link style={styles.link} to="/mapa">Mapa</Link>
      <Link style={styles.link} to="/qr">QR</Link>
      <Link style={styles.link} to="/asistente">Asistente</Link>
      <button style={styles.button} onClick={cerrarSesion}>Cerrar Sesión</button>
    </nav>
  );
}
