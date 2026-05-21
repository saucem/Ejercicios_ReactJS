import { Nav } from "../Nav/Nav.jsx";
import styles from "./Header.module.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Nav />
    </header>    
  );
}

export default Header;