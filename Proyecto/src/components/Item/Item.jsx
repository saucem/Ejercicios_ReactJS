import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Item.module.css"

export function Item({ nombre, precio, stock, imagen, id }) {
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

  const price = new Intl.NumberFormat('es-Latn');

  return (
    <div className={styles.card}>
      <span
        className={styles.iconFav}
        onClick={marcarComoFavorito}>
        {esFavorito ? 
          <img src="/images/icons/favorite_24dp_filled.svg" alt="Ícono Favorito deseleccionado"></img> :
          <img src="/images/icons/favorite_24dp_outline.svg" alt="Ícono Favorito seleccionado"></img>
        }
      </span>
      <Link className={styles.cardLink} to={`/productos/${id}`}>
        <div className={styles.cardHeader}>
            <img src={imagen} alt="Imagen del producto"/>
        </div>
      </Link>
      <div className={styles.cardBody}>
        <h3>{nombre}</h3>
        <p>Disponible: {stock} unidades</p>
        <p className={styles.productPrice}>${price.format(precio)}</p>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.qtyField}>
          <button className={styles.btnQty} onClick={SubstractItem}>
            -
          </button>
          <span className={styles.lblQty}>{cartQty}</span>
          <button className={styles.btnQty} onClick={AddItem}>
            +
          </button>
        </span>
        <button
          onClick={AgregarCarrito}
          className={"btn btn-solid"}>
            Comprar
        </button>
      </div>
  </div>
  );
}

//⭐☆
