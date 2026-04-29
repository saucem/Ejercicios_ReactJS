import { useState, useEffect } from "react";
import { ContactList } from "../ContactList/ContactList";

export function Directory({ Mensaje }) {
  const [contactos, setContactos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("./data/nosotros.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los contactos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setContactos(datos);
        console.log("Contactos cargados");
      })
      .catch((error) => {
        setError(error.message);
        console.log("No hay contactos" + error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return (
    <>
      <h2>{Mensaje}</h2>
      <ContactList contactos={contactos} />
    </>
  );
}
