import React from "react";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navbrand}>
          <span>
            <img src="../images/icons/goodwork_logo_black.svg" alt="Logo WoodWork" width={"48"} />
            GoodWork
          </span>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li><Link className={styles.navlink} to={"/"}>Inicio</Link></li>
            <li><Link className={styles.navlink} to={"/productos"}>Productos</Link></li>
            <li><Link className={styles.navlink} to={"/destacados"}>Destacados</Link></li>
            <li><Link className={styles.navlink} to={"/contacto"}>Contacto</Link></li>
          </ul>
        </div>
        <div className={styles.navtrail}>
          <div className={styles.navbar}>
            <ul>
              <li><Link className={styles.navlink} to={"/altaproducto"}>Stock</Link></li>
              <li><Link className={styles.navlinkImage} to={"/carrito"}><img src="../images/icons/shopping_cart_32dp.svg" alt="Imagen de un carrito de compras" width={"32"} /></Link></li>
            </ul>
          </div>
        </div>
      </nav>      
    </>
  )
} 