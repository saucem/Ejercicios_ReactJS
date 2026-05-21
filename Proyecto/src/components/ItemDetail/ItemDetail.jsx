import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./ItemDetail.module.css";

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información de los productos");
        }
        return respuesta.json();
      })
      .then((datos) => {
        const productoEncontrado = datos.find(
          (prod) => prod.id === id
        );
        setProducto(productoEncontrado);
      })
      .catch((error) => console.error("Error al cargar el producto:", error));
  }, [id]);
  
  if (!producto) {
    return <h2>Cargando detalle del producto {id}...</h2>;
  }
  if (!producto.id) {
    return <h2>Producto no encontrado.</h2>;
  }

  const price = new Intl.NumberFormat('es-Latn');

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
        </div>  
        <div className={styles.dataContainer}>
          <h2>{producto.nombre}</h2>
          <p>Disponible: {producto.stock}</p>
          <p>{producto.detalle}</p>
          <p className={styles.productPrice}>${price.format(producto.precio)}</p>
        </div>  
      </div>
    </>
  );
};

export default ItemDetail;
