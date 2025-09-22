/*// src/Screens/Ofertas/Ofertas.jsx
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Ofertas() {
  const [ofertas, setOfertas] = useState([]);
  const [nuevaOferta, setNuevaOferta] = useState({
    titulo: "",
    tipo: "",
    variedad: "",
    precio: "",
    imagen: "",
  });

  // Cargar ofertas desde Firestore al montar el componente
  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const snapshot = await getDocs(collection(db, "ofertas"));
        const ofertasFirestore = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOfertas(ofertasFirestore);
      } catch (error) {
        console.error("Error cargando ofertas:", error);
      }
    };
    fetchOfertas();
  }, []);

  const handleChange = (e) => {
    setNuevaOferta({ ...nuevaOferta, [e.target.name]: e.target.value });
  };

  const agregarOferta = async () => {
    if (!nuevaOferta.titulo || !nuevaOferta.precio) return;

    try {
      // Guardar en Firestore
      const docRef = await addDoc(collection(db, "ofertas"), nuevaOferta);

      // Actualizar estado local
      setOfertas([...ofertas, { id: docRef.id, ...nuevaOferta }]);

      // Limpiar formulario
      setNuevaOferta({ titulo: "", tipo: "", variedad: "", precio: "", imagen: "" });
    } catch (error) {
      console.error("Error agregando oferta:", error);
    }
  };

  const styles = {
    container: { display: "flex", minHeight: "100vh", fontFamily: "Inter, sans-serif", backgroundColor: "#f9f9f9" },
    sidebar: { width: "240px", backgroundColor: "#FFD6A5", padding: "24px", height: "100vh", position: "sticky", top: 0 },
    sidebarItem: { marginBottom: "16px", cursor: "pointer", color: "#333", fontWeight: "500" },
    main: { flex: 1, padding: "24px", height: "100vh", overflowY: "auto" },
    titulo: { fontSize: "28px", color: "#ED6D4A", marginBottom: "20px" },
    form: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" },
    input: { padding: "10px", borderRadius: "8px", border: "1px solid #ccc", width: "100%" },
    boton: { gridColumn: "span 2", padding: "12px", backgroundColor: "#ED6D4A", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" },
    card: { backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex", flexDirection: "column" },
    imagen: { width: "100%", height: "160px", objectFit: "cover" },
    contenido: { padding: "16px", flex: 1, display: "flex", flexDirection: "column" },
    botonVer: { backgroundColor: "#ED6D4A", color: "#fff", border: "none", padding: "10px 12px", borderRadius: "6px", cursor: "pointer", marginTop: "auto", fontWeight: "500" },
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h1 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "24px" }}>Dashboard</h1>
        <div style={styles.sidebarItem}>Ofertas</div>
        <div style={styles.sidebarItem}>Asistente</div>
        <div style={styles.sidebarItem}>Reconocimiento con Imagen</div>
      </aside>

      <main style={styles.main}>
        <h2 style={styles.titulo}>Gestión de Ofertas</h2>

        <div style={styles.form}>
          <input style={styles.input} name="titulo" placeholder="Título" value={nuevaOferta.titulo} onChange={handleChange} />
          <input style={styles.input} name="tipo" placeholder="Tipo de café" value={nuevaOferta.tipo} onChange={handleChange} />
          <input style={styles.input} name="variedad" placeholder="Variedad" value={nuevaOferta.variedad} onChange={handleChange} />
          <input style={styles.input} name="precio" placeholder="Precio (C$)" value={nuevaOferta.precio} onChange={handleChange} />
          <input style={styles.input} name="imagen" placeholder="URL de imagen" value={nuevaOferta.imagen} onChange={handleChange} />
          <button style={styles.boton} onClick={agregarOferta}>Agregar Oferta</button>
        </div>

        <div style={styles.grid}>
          {ofertas.map((oferta) => (
            <div key={oferta.id} style={styles.card}>
              <img src={oferta.imagen} alt={oferta.titulo} style={styles.imagen} />
              <div style={styles.contenido}>
                <h3 style={{ fontSize: "18px", fontWeight: "600" }}>{oferta.titulo}</h3>
                <p><strong>Tipo:</strong> {oferta.tipo}</p>
                <p><strong>Variedad:</strong> {oferta.variedad}</p>
                <p><strong>Precio:</strong> {oferta.precio}</p>
                <button style={styles.botonVer}>Ver Info</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}*/// src/Screens/Ofertas/Ofertas.jsx
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Ofertas() {
  const [ofertas, setOfertas] = useState([]);
  const [nuevaOferta, setNuevaOferta] = useState({
    titulo: "",
    tipo: "",
    variedad: "",
    precio: "",
    imagen: "",
  });

  // Cargar ofertas desde Firestore al montar el componente
  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const snapshot = await getDocs(collection(db, "ofertas"));
        const ofertasFirestore = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setOfertas(ofertasFirestore);
      } catch (error) {
        console.error("Error cargando ofertas:", error);
      }
    };
    fetchOfertas();
  }, []);

  const handleChange = (e) => {
    setNuevaOferta({ ...nuevaOferta, [e.target.name]: e.target.value });
  };

  const agregarOferta = async () => {
    if (!nuevaOferta.titulo || !nuevaOferta.precio) return;

    try {
      // Guardar en Firestore
      const docRef = await addDoc(collection(db, "ofertas"), nuevaOferta);

      // Actualizar estado local
      setOfertas([...ofertas, { id: docRef.id, ...nuevaOferta }]);

      // Limpiar formulario
      setNuevaOferta({ titulo: "", tipo: "", variedad: "", precio: "", imagen: "" });
    } catch (error) {
      console.error("Error agregando oferta:", error);
    }
  };

  const styles = {
    container: { display: "flex", minHeight: "100vh", fontFamily: "Inter, sans-serif", backgroundColor: "#f9f9f9" },
    sidebar: { width: "240px", backgroundColor: "#FFD6A5", padding: "24px", height: "100vh", position: "sticky", top: 0 },
    sidebarItem: { marginBottom: "16px", cursor: "pointer", color: "#333", fontWeight: "500" },
    main: { flex: 1, padding: "24px", height: "100vh", overflowY: "auto" },
    titulo: { fontSize: "28px", color: "#ED6D4A", marginBottom: "20px" },
    form: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px", backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" },
    input: { padding: "10px", borderRadius: "8px", border: "1px solid #ccc", width: "100%" },
    boton: { gridColumn: "span 2", padding: "12px", backgroundColor: "#ED6D4A", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "20px" },
    card: { backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex", flexDirection: "column" },
    imagen: { width: "100%", height: "160px", objectFit: "cover" },
    contenido: { padding: "16px", flex: 1, display: "flex", flexDirection: "column" },
    botonVer: { backgroundColor: "#ED6D4A", color: "#fff", border: "none", padding: "10px 12px", borderRadius: "6px", cursor: "pointer", marginTop: "auto", fontWeight: "500" },
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h1 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "24px" }}>Dashboard</h1>
        <div style={styles.sidebarItem}>Ofertas</div>
        <div style={styles.sidebarItem}>Asistente</div>
        <div style={styles.sidebarItem}>Reconocimiento con Imagen</div>
      </aside>

      <main style={styles.main}>
        <h2 style={styles.titulo}>Gestión de Ofertas</h2>

        <div style={styles.form}>
          <input style={styles.input} name="titulo" placeholder="Título" value={nuevaOferta.titulo} onChange={handleChange} />
          <input style={styles.input} name="tipo" placeholder="Tipo de café" value={nuevaOferta.tipo} onChange={handleChange} />
          <input style={styles.input} name="variedad" placeholder="Variedad" value={nuevaOferta.variedad} onChange={handleChange} />
          <input style={styles.input} name="precio" placeholder="Precio (C$)" value={nuevaOferta.precio} onChange={handleChange} />
          <input style={styles.input} name="imagen" placeholder="URL de imagen" value={nuevaOferta.imagen} onChange={handleChange} />
          <button style={styles.boton} onClick={agregarOferta}>Agregar Oferta</button>
        </div>

        <div style={styles.grid}>
          {ofertas.map((oferta) => (
            <div key={oferta.id} style={styles.card}>
              <img src={oferta.imagen} alt={oferta.titulo} style={styles.imagen} />
              <div style={styles.contenido}>
                <h3 style={{ fontSize: "18px", fontWeight: "600" }}>{oferta.titulo}</h3>
                <p><strong>Tipo:</strong> {oferta.tipo}</p>
                <p><strong>Variedad:</strong> {oferta.variedad}</p>
                <p><strong>Precio:</strong> {oferta.precio}</p>
                <button style={styles.botonVer}>Ver Info</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}