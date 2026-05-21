import { Link } from "react-router-dom";
import styles from "./Cart.module.css";

export function Cart() {
  return (
    <>
      <div className={styles.sectionTitle}>
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
