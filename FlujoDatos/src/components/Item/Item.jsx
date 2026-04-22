// Recibe las props usando destructuring
import { useState } from "react";

export function Item({ nombre, precio, stock }) {
  const [esFavorito, setEsFavorito] = useState(false);

  const AgregarCarrito = () => {
    alert(`Agregaste ${nombre} a tu carrito!`);
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  return (
    <div>
      <h3>{nombre}</h3>
      <p>Precio: ${precio}</p>
      <p>Stock disponible: {stock}</p>
      <button onClick={AgregarCarrito}>Comprar</button>
      <span 
        style={{ marginLeft: "10px", cursor: "pointer" }}
        onClick={marcarComoFavorito}
      >
        {esFavorito ? "⭐" : "☆"}
      </span>
    </div>
  );
}

//⭐☆
