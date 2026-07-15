import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import { db } from "../../firebase/config.js";
import { collection, getDocs } from "firebase/firestore";
import styles from "./ItemListContainer.module.css";

export function ItemListContainer({ Mensaje, Destacados, ShowBanner }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  const getProductos = async () => {
    try {
      const response = await getDocs(collection(db, "products"));
      const productList = response.docs.map((doc) => ({
        firestoreId: doc.id,
        ...doc.data(),
      }));
      setProductos(productList);
      console.log("Productos cargados");
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      toast.error("Ocurrió un error al cargar los productos.");
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  // Agregar acá los mensajes de carga y error

  const productosAMostrar = Destacados
    ? productos.filter((prod) => prod.destacado)
    : productos;

  return (
    <>
      <div className={styles.container}>
        { ShowBanner ?
          <div className={styles.sectionTitle}>
            <h1>{Mensaje}</h1>
          </div>
          :
          <h1 className="text-light h2 my-4">{Mensaje}</h1>
        }
        <div className={`${styles.sectionContent} rounded-2`}>
          <ItemList productos={productosAMostrar} />
        </div>
      </div>
    </>
  );
}
