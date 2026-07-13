import { useState, useEffect } from "react";
import { ContactList } from "../ContactList/ContactList";
import { db } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";

export function Directory({ Mensaje }) {
  const [contactos, setContactos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  const getContactos = async () => {
    try {
      const response = await getDocs(collection(db, "staff"));
      const contactList = response.docs.map((doc) => ({
        ...doc.data(),
      }));
      setContactos(contactList);
      console.log("Contactos cargados");
    } catch (error) {
      console.error("Error al obtener los contactos:", error);
      toast.error("Ocurrió un error al cargar los contactos.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    getContactos();
  }, []);

  return (
    <>
      <h2>{Mensaje}</h2>
      <ContactList contactos={contactos} />
    </>
  );
}
