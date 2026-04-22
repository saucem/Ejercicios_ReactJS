import Nav from "../Nav/Nav.jsx"
import styles from "./Header.module.css"

function Header () {
  const menuitems = ["Inicio", "Productos", "Nosotros", "Contacto", "Carrito"]
  return (
    <div className={styles.header}>
      <Nav items={menuitems}></Nav>
    </div>
  );
}

export default Header