import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { useCart } from "../../context/CartContext";

export function Cart() {
  const { cart, clearCart, getCartTotal } = useCart();

  //validar si el carrito está vacío:
  //  en tal caso mostrar el mensaje por defecto
  //  en caso de que haya productos, mostrarlos como una lista de productos con map

  if (cart.length === 0) {
    return (
      <>
        <div className={styles.sectionTitleEmpty}>
          <h1>Carrito</h1>
        </div>
        <div className={styles.sectionContent}>
          <h2>Aún no hay productos en tu carrito</h2>
          <p>
            En la sección de destacados podrás encontrar tu próximo objeto
            favorito
          </p>
          <Link className="btn btn-solid" to={"/destacados"}>
            Explorar destacados
          </Link>
        </div>
      </>
    );
  }
  
  return (
    <>
      <div className={styles.sectionTitleFull}>
        <h1>Carrito</h1>
      </div>
      <div className={styles.sectionContent}>
        <h2>Agregaste productos a tu carrito</h2>
        {cart.map(item => (
          <div key={item.id} className="h-card">
            <h4>{item.nombre}</h4>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: {item.precio}</p>
            <p>Subtotal: {item.precio * item.quantity}</p>
          </div>
        ))}
        <hr />
        <h3>Total a pagar: ${getCartTotal()}</h3>
        <button className="btn btn-solid" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>

    </>
  );
}
