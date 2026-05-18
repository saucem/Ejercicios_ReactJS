import styles from "./Header.module.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navbrand}>
          <span>
            <img src="../images/icons/woodwork_logo_black.svg" alt="Logo WoodWork" width={"48"} />
            WoodWork
          </span>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li><Link className={styles.navlink} to={"/"}>Inicio</Link></li>
            <li><Link className={styles.navlink} to={"/productos"}>Productos</Link></li>
            <li><Link className={styles.navlink} to={"/destacados"}>Destacados</Link></li>
            <li><Link className={styles.navlink} to={"/nosotros"}>Nosotros</Link></li>
            <li><Link className={styles.navlink} to={"/contacto"}>Contacto</Link></li>
          </ul>
        </div>
        <div className={styles.navtrail}>
          <img src="../images/icons/shopping_cart_32dp.svg" alt="Imagen de un carrito de compras" width={"32"} />
        </div>

      </nav>      
    </header>    
  );
}

export default Header;