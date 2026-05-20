import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/Itemlist";
import styles from "./ItemListContainer.module.css"

export function ItemListContainer({ Mensaje, Destacados }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("./data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
        console.log("Productos cargados");
      })
      .catch((error) => {
        setError(error.message);
        console.log("No hay productos");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  // Agregar acá los mensajes de carga y error

  const productosAMostrar = Destacados ? productos.filter(prod => prod.destacado) : productos;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h1>{Mensaje}</h1>
        </div>
        <div className={styles.sectionContent}>
          <ItemList productos={productosAMostrar} />
        </div>
      </div>
    </>
  );
}
