export function ProductForm({ datosForm, manejarCambio, manejarEnvio}) {
  return (
    <form onSubmit={manejarEnvio}>
      <h3>Agregar nuevo producto</h3>
      <div>
        <label>Nombre del producto:</label>
        <input
          type="text" 
          placeholder="Ej.: Teclado mecánico"
          name="nombre"
          value={datosForm.nombre}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label>Precio:</label>
        <input 
          type="number"
          placeholder="Ej. 95"
          name="precio"
          value={datosForm.precio}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          placeholder="Ej. 5"
          name="stock"
          value={datosForm.stock}
          onChange={manejarCambio}
        />
      </div>
      <div>
        <label>Imagen del producto</label>
        <input type="file" />
      </div>
    </form>
  )
}