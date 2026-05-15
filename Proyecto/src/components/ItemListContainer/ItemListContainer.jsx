import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/Itemlist";

export function ItemListContainer({ Mensaje, Destacados }) {
  // const productos = [
  //   { id: "1234", nombre: "Notebook Pro", precio: 12000, stock: 15 },
  //   { id: "2344", nombre: "Monitor Curvo", precio: 450000, stock: 25 },
  //   { id: "2545", nombre: "Teclado Mecánico", precio: 15000, stock: 50 },
  // ];

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
      <h2>{Mensaje}</h2>
      <ItemList productos={productosAMostrar} />
    </>
  );
}
