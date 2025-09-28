// src/Navegacion.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Screens/Login/Login";
import Registro from "./Screens/Login/Registro";
import Ofertas from "./Screens/Ofertas/Ofertas";
import Perfil from "./Screens/Perfil/Perfil";
import Mapa from "./Screens/Mapa/Mapa";
import Asistente from "./Screens/IA/Asistente";

export default function Navegacion({ user, setUser }) {
  return (
    <>
      {/* Mostrar navbar solo si hay usuario */}
      {user && <Navbar cerrarSesion={() => setUser(null)} />}

   <Routes>
  {/* Rutas públicas */}
  {!user && (
    <>
      <Route path="/login" element={<Login setUser={setUser} />} />
      <Route path="/registro" element={<Registro setUser={setUser} />} />
      {/* Redireccionar cualquier otra ruta a login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </>
  )}

  {/* Rutas privadas */}
  {user && (
    <>
      <Route path="/" element={<Ofertas />} />
      <Route path="/oferta" element={<Ofertas />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/mapa" element={<Mapa />} />
      <Route path="/asistente" element={<Asistente />} />
      {/* Redireccionar cualquier otra ruta a "/" */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </>
  )}
</Routes>

    </>
  );
}
