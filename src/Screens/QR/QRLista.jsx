import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function QRLista() {
  const [qrList, setQrList] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "qr"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setQrList(data);
    });
    return () => unsub();
  }, []);

  return (
    <div className="container">
      <h2>Códigos QR</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "16px" }}>
        {qrList.map(qr => (
          <div key={qr.id} className="card">
            <img src={qr.imagen} alt="QR" style={{ width: "100%", borderRadius: "8px" }} />
            <p>{qr.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}