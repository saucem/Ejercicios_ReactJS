import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext"; //importamos el consumer de cartContext
import { Link } from "react-router-dom";
import styles from "./Item.module.css";

export function Item({ nombre, precio, stock, imagen, id }) {
  const product = { id, nombre, precio, stock, imagen };

  const [cantidad, setCantidad] = useState(0);

  const [esFavorito, setEsFavorito] = useState(false);

  const [cartQty, setCartQty] = useState(1);

  const { addToCart, getCurrentQuantity } = useCart(); //traemos las funciones del contexto que nos interesa usar en este punto

  const SubstractItem = () => {
    if (cartQty > 1) {
      setCartQty(cartQty - 1);
    }
  };

  const AddItem = () => {
    if (cartQty + getCurrentQuantity(id) < stock) {
      setCartQty(cartQty + 1);
    }
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  const handleAddToCart = () => {
    addToCart(product, cartQty);
  };

  const addToCartEnabled = () => {
    if (
      getCurrentQuantity(id) === stock ||
      getCurrentQuantity(id) + cartQty > stock
    ) {
      return false;
    }
    return true;
  };

  const price = new Intl.NumberFormat("es-Latn");

  return (
    <div className={styles.card}>
      <span className={styles.iconFav} onClick={marcarComoFavorito}>
        {esFavorito ? (
          <img
            src="/images/icons/favorite_24dp_filled.svg"
            alt="Ícono Favorito deseleccionado"
          ></img>
        ) : (
          <img
            src="/images/icons/favorite_24dp_outline.svg"
            alt="Ícono Favorito seleccionado"
          ></img>
        )}
      </span>
      <Link className={styles.cardLink} to={`/productos/${id}`}>
        <div className={styles.cardHeader}>
          <img src={imagen} alt="Imagen del producto" />
        </div>
      </Link>
      <div className={styles.cardBody}>
        {getCurrentQuantity(id) ? (
          <Link to={"/carrito"}>
            <span className={styles.iconCart}>
              <img
                src="../images/icons/shopping_cart_32dp.svg"
                alt="Imagen de un carrito de compras"
                width={"24"}
                className={styles.imgLink}
              />
              <span>{getCurrentQuantity(id)}</span>
            </span>
          </Link>
        ) : (
          ""
        )}
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
        {addToCartEnabled() ? (
          <button onClick={handleAddToCart} className={"btn btn-solid"}>
            Comprar
          </button>
        ) : (
          <button className={"btn btn-solid"} disabled>
            Comprar
          </button>
        )}
      </div>
    </div>
  );
}
