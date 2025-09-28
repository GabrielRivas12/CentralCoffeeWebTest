import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";


export default function LoginWeb() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();


  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#EBEBEB",  
    },
    card: {
      display: "flex",
      width: "800px",
      height: "500px",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
    },
    banner: {
      flex: 1,
      backgroundColor: "#f59b8d",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      padding: "20px",
    },
    logo: {
      width: "300px",
      height: "300px",
      marginBottom: "50px",
    },
    textoBanner: {
      fontSize: "18px",
      textAlign: "center",
      lineHeight: "1.4",
      fontWeight: "500",
    },
    cuerpo: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    },
    titulo: {
      fontSize: "22px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    buttonGoogle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: "10px 20px",
      width: "100%",
      maxWidth: "300px",
      height: "45px",
      boxShadow: "0px 1px 5px rgba(0,0,0,0.2)",
      cursor: "pointer",
      marginBottom: "25px",
      gap: "10px",
      fontWeight: "500",
    },
    input: {
      width: "100%",
      maxWidth: "300px",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    link: {
      alignSelf: "flex-end",
      fontSize: "12px",
      color: "#ED6D4A",
      cursor: "pointer",
      marginBottom: "20px",
    },
    boton: {
      width: "100%",
      maxWidth: "300px",
      padding: "10px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#ED6D4A",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      marginBottom: "10px",
    },
    textoRegistro: {
      fontSize: "13px",
      marginBottom: "10px",
    },
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
      display: modalVisible ? "flex" : "none",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      width: "80%",
      maxWidth: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    modalInput: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Banner Izquierda */}
        <div style={styles.banner}>
        <img src={logo} alt="Logo" style={styles.logo} />


          <p style={styles.textoBanner}>
            Donde el café une historias
            <br />
            ¡Bienvenido!
          </p>
        </div>

        {/* Cuerpo Derecha */}
        <div style={styles.cuerpo}>
          <h2 style={styles.titulo}>Login</h2>

          {/* Botón Google */}
          <div style={styles.buttonGoogle}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
              alt="Google Logo"
              style={{ width: "20px", height: "20px" }}
            />
            <span>Iniciar sesión con Google</span>
          </div>

          {/* Inputs */}
          <input style={styles.input} type="email" placeholder="Correo" />
          <input style={styles.input} type="password" placeholder="Contraseña" />

          <span style={styles.link} onClick={() => setModalVisible(true)}>
            ¿Olvidaste tu contraseña?
          </span>

          <button
            style={styles.boton}
            onClick={() => navigate("/oferta")}
          >
            Iniciar sesión
          </button>

          <p style={styles.textoRegistro}>
            ¿No tienes cuenta?{" "}
            <span style={{ color: "#ED6D4A", cursor: "pointer" }}>
              Regístrate
            </span>
          </p>
        </div>
      </div>

      {/* Modal */}
      <div style={styles.modalOverlay}>
        <div style={styles.modalContainer}>
          <h3>Recuperar contraseña</h3>
          <input
            style={styles.modalInput}
            type="email"
            placeholder="Ingresa tu correo"
          />
          <button
            style={styles.boton}
            onClick={() => setModalVisible(false)}
          >
            Enviar correo
          </button>
          <button
            style={{
              ...styles.boton,
              backgroundColor: "#ccc",
              color: "#000",
            }}
            onClick={() => setModalVisible(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
