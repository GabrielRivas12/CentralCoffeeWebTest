import { useEffect, useRef } from "react";

export default function Mapa() {
 
 
    const mapRef = useRef(null);
    //ofertas creadas//
 /* const ofertas = [
  {
    id: "1",
    titulo: "Café Arábico",
    tipo: "Arábico",
    variedad: "Typica",
    precio: 155,
    imagen: "https://via.placeholder.com/300x200?text=Café",
  },
  {
    id: "2",
    titulo: "Café Robusta",
    tipo: "Robusta",
    variedad: "Caturra",
    precio: 140,
    imagen: "https://via.placeholder.com/300x200?text=Robusta",
  },
];*/


  useEffect(() => {
    const loadMap = async () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCe8Vo9ZZbg7oazvvVRujvYR_zsRlkKHvI`;
      script.async = true;
      script.onload = () => {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: 5.1167, lng: -74.1833 },
          zoom: 10,
        });
      };
      document.body.appendChild(script);
    };
    loadMap();
  }, []);

  return (
    <div>
      <h2>Mapa Interactivo</h2>
      <div ref={mapRef} style={{ width: "100%", height: "500px" }} />
    </div>
  );
}