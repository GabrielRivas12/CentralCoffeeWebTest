import React, { useState } from 'react';

export default function LoginWeb() {
  const [modalVisible, setModalVisible] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#fff',
    },
    containerBanner: {
      flex: 1,
      backgroundColor: '#ED6D4A',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    },
    containerCuerpo: {
      flex: 2.5,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
    },
    titulo: {
      fontSize: '30px',
      fontWeight: 'bold',
      marginBottom: '40px',
    },
    buttonGoogle: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius: '5px',
      padding: '10px 20px',
      width: '200px',
      height: '50px',
      boxShadow: '0px 1px 5px rgba(0,0,0,0.3)',
      cursor: 'pointer',
      marginBottom: '30px',
      gap: '10px',
    },
    logo: {
      width: '20px',
      height: '20px',
    },
    input: {
      width: '250px',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    boton: {
      width: '270px',
      padding: '10px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#ED6D4A',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    label: {
      color: '#ED6D4A',
      marginBottom: '15px',
      cursor: 'pointer',
    },
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: modalVisible ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      width: '80%',
      maxWidth: '400px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    modalInput: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
  };

  return (
    <div style={styles.container}>
      {/* Banner */}
      <div style={styles.containerBanner}>
        <h1 style={{ color: '#fff' }}>Central Coffee</h1>
      </div>

      {/* Cuerpo */}
      <div style={styles.containerCuerpo}>
        <h2 style={styles.titulo}>Login</h2>

        {/* Botón Google */}
        <div style={styles.buttonGoogle}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google Logo"
            style={styles.logo}
          />
          <span>Sign in with Google</span>
        </div>

        <p style={{ margin: '20px 0' }}>O</p>

        {/* Inputs */}
        <input style={styles.input} type="email" placeholder="Correo" />
        <input style={styles.input} type="password" placeholder="Contraseña" />

        <p style={styles.label} onClick={() => setModalVisible(true)}>
          ¿Olvidaste tu contraseña?
        </p>

        <button style={styles.boton}>Iniciar</button>
        <button style={styles.boton}>Registrarse</button>
        
      </div>

      {/* Modal */}
      <div style={styles.modalOverlay}>
        <div style={styles.modalContainer}>
          <h3>Recuperar contraseña</h3>
          <input style={styles.modalInput} type="email" placeholder="Ingresa tu correo" />
          <button style={styles.boton} onClick={() => setModalVisible(false)}>
            Enviar correo
          </button>
          <button style={{ ...styles.boton, backgroundColor: '#ccc', color: '#000' }} onClick={() => setModalVisible(false)}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
