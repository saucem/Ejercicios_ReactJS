import React, { useState } from "react";
import styles from "./ProductForm.module.css";

export function ProductForm({
  datosForm,
  loading,
  editMode,
  manejarCambio,
  manejarCambioImagen,
  manejarEnvio,
  manejarCancelar
}) {
  return (
    <>
      <div className={styles.sectionTitle}>
        <h1>Gestión de stock</h1>
      </div>
      <div className="container text-light mt-4">
        <h2>Datos del producto</h2>
        <form
          onSubmit={manejarEnvio}
          className="border border-1 border-secondary rounded-2 p-3 d-flex flex-column mt-3"
        >
          <div className="row">
            <div className="mb-3 col">
              <label htmlFor="nombre" className="form-label">
                Nombre:
              </label>
              <input
                type="text"
                placeholder="Ej.: Posa pava"
                name="nombre"
                value={datosForm.nombre}
                onChange={manejarCambio}
                className="form-control"
                required
              />
            </div>
            <div className="w-100 d-block d-lg-none"></div>
            <div className="mb-3 col-sm-4 col-lg-2">
              <label htmlFor="id" className="form-label">
                SKU
              </label>
              <input
                type="number"
                placeholder="0000"
                name="id"
                value={datosForm.id}
                onChange={manejarCambio}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3 col-sm-4 col-lg-2">
              <label htmlFor="stock" className="form-label">
                Stock inicial:
              </label>
              <input
                type="number"
                placeholder="0"
                name="stock"
                value={datosForm.stock}
                onChange={manejarCambio}
                className="form-control"
              />
            </div>
            <div className="mb-3 col-sm-4 col-lg-2">
              <label htmlFor="precio" className="form-label">
                Precio:
              </label>
              <input
                type="number"
                placeholder="0.00"
                name="precio"
                value={datosForm.precio}
                onChange={manejarCambio}
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col">
              <label htmlFor="imagen" className="form-label">
                Imagen:
              </label>
              <input
                type="file"
                name="imagen"
                onChange={manejarCambioImagen}
                className="form-control"
                required
              />
            </div>
            <div className="w-100 d-block d-lg-none"></div>
            <div className="mb-3 col-sm-9 col-lg-4">
              <label htmlFor="precio" className="form-label">
                Categoría:
              </label>
              <input
                type="text"
                placeholder="Ej.: Cocina"
                name="categoria"
                value={datosForm.categoria}
                onChange={manejarCambio}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3 col-sm-3 col-lg-2 d-flex justify-content-md-end align-items-end">
              <span>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  name="destacado"
                  checked={datosForm.destacado}
                  onChange={manejarCambio}
                />
                <label className="form-check-label" htmlFor="destacado">
                  Destacado
                </label>
              </span>
            </div>
            <div className="w-100 d-none d-lg-block"></div>
            <div className="mb-3 col">
              <label htmlFor="detalle" className="form-label">
                Descripción:
              </label>
              <textarea
                type="textarea"
                placeholder="Agregar detalles del producto"
                name="detalle"
                value={datosForm.detalle}
                onChange={manejarCambio}
                className="form-control"
              />
            </div>
          </div>
          <div className="row justify-content-end mt-4">
            <div className="col-12 col-md-6 col-lg-3 col-xl-2 mb-2">
              <button className="btn btn-secondary w-100" type="button" onClick={manejarCancelar}>
                Cancelar
              </button>
            </div>
            <div className="col-12 col-md-6 col-lg-3 col-xl-2 mb-2">
              <button className="btn btn-primary w-100" type="submit">
                {loading ? 
                    "Guardando..."
                 : 
                  editMode ? "Guardar cambios" : "Guardar Producto"
                }
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
