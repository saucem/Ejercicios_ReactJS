import styles from "./Header.module.css"

function Header() {
  return (
    <div>
      <header>
        <h1>Tienda React</h1>
      </header>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;