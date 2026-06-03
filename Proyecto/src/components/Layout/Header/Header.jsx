import { Navigation } from "../Navigation/Navigation.jsx";
import styles from "./Header.module.css"
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext.jsx";

function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>    
  );
}

export default Header;