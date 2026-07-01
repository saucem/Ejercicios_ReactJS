import React from "react"
import styles from "./ProductForm.module.css"

export function ProductForm({ datosForm, manejarCambio, manejarCambioImagen, manejarEnvio}) {
  
  //Agregar los campos necesarios para completar la carga de un producto en la BD de Firestore (id, categoría, etc.)
  
  return (
    <>
      <div className={styles.sectionTitle}>
        <h1>Gestión de stock</h1>
      </div>
      <div className={styles.sectionContent}>
        <form onSubmit={manejarEnvio} className={styles.productForm}>
          <h2>Agregar nuevo producto</h2>
          <div className={styles.inputGroup}>
            <label>Nombre del producto:</label>
            <input
              type="text" 
              placeholder="Ej.: Posa pava"
              name="nombre"
              value={datosForm.nombre}
              onChange={manejarCambio}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Precio:</label>
            <input 
              type="number"
              placeholder="Ej.: 10000"
              name="precio"
              value={datosForm.precio}
              onChange={manejarCambio}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Stock:</label>
            <input
              type="number"
              placeholder="Ej.: 5"
              name="stock"
              value={datosForm.stock}
              onChange={manejarCambio}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Imagen del producto</label>
            <input 
              type="file"
              onChange={manejarCambioImagen}
            />
          </div>
          <button className="btn btn-outline-warning" type="submit">Guardar Producto</button>
        </form>
      </div>
    </>
  )
}