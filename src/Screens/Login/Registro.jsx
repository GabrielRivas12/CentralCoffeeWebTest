import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, pass);
    navigate("/mapa");
  };

  return (
    <div className="container">
      <div className="card" style={{ maxWidth: 400, margin: "auto" }}>
        <h2>Iniciar Sesión</h2>
        <input className="input" placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Contraseña" value={pass} onChange={e => setPass(e.target.value)} />
        <button className="button" onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}