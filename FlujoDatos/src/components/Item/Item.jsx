// Recibe las props usando destructuring
import { useState, useEffect } from "react";

export function Item({ nombre, precio, stock, imagen }) {
  const [esFavorito, setEsFavorito] = useState(false);

  const [cartQty, setCartQty] = useState(1);

  const SubstractItem = () => {
    if (cartQty > 1) {
      setCartQty(cartQty - 1);
    }
  };

  const AddItem = () => {
    if (cartQty < stock) {
      setCartQty(cartQty + 1);
    }
  };

  const AgregarCarrito = () => {
    alert(`Agregaste ${cartQty} ${nombre} a tu carrito!`);
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  useEffect(() => {
    console.log("El componente se renderizó o cambió.");
  }, [cartQty]);

  return (
    <div>
      <h3>{nombre}</h3>
      <img src={imagen} alt="Imagen del producto" width={100}/>
      <p>Precio: ${precio}</p>
      <p>Stock disponible: {stock}</p>
      <button className="btnQty" onClick={SubstractItem}>
        -
      </button>
      <span className="lblQty">{cartQty}</span>
      <button className="btnQty" onClick={AddItem}>
        +
      </button>
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
