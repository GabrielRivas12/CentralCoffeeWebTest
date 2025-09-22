import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Perfil() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const fetchPerfil = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        setPerfil(docSnap.data());
      }
    };
    fetchPerfil();
  }, []);

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      {perfil ? (
        <div>
          <p><strong>Email:</strong> {perfil.email}</p>
          <p><strong>Rol:</strong> {perfil.role}</p>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}
    </div>
  );
}