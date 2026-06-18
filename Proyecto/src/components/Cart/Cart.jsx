import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import { useCart } from "../../context/CartContext";
import { Table } from "react-bootstrap";

export function Cart() {
  const { cart, clearCart, getCartTotal, removeItem } = useCart();

  const price = new Intl.NumberFormat("es-Latn");

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
          <Link className="btn btn-warning" to={"/destacados"}>
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
        <h2 className="mt-4">Agregaste productos a tu carrito</h2>
        <Table hover responsive>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Precio unitario</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imagen}
                    alt={`Imagen de ${item.nombre}`}
                    className={styles.thumbnail}
                  />
                </td>
                <td>{item.nombre}</td>
                <td className="text-center">{item.quantity}</td>
                <td>${price.format(item.precio)}</td>
                <td>${price.format(item.precio * item.quantity)}</td>
                <td className="text-center">
                  <button onClick={""} className="action-link">
                    <img 
                      src="/images/icons/edit_48dp.svg"
                      alt="Imagen de lápiz de edición"
                      width={24} />
                  </button>
                  <button onClick={() => removeItem(item.id)} className="action-link">
                    <img 
                      src="/images/icons/delete_48dp.svg"
                      alt="Imagen de cesto de basura"
                      width={24} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <hr />
        <h3>Total a pagar: ${getCartTotal()}</h3>
        <button className="btn btn-danger mb-2" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </>
  );
}
