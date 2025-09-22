// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navegacion from "./Navegacion";

function App() {
  const [user, setUser] = useState(null); // null = no logueado

  const styles = {
    app: {
      display: "flex",
      height: "100vh",
      fontFamily: "Inter, sans-serif",
    },
  };

  return (
    <Router>
      <div style={styles.app}>
        <Navegacion user={user} setUser={setUser} />
      </div>
    </Router>
  );
}

export default App;

