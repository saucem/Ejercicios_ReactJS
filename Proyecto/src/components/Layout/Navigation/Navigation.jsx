import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Nav, Button } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext.jsx";
import { useAuth } from "../../../context/AuthContext.jsx";

import styles from "./Navigation.module.css";

export function Navigation() {
  const { getCartQuantity } = useCart();
  const { user, login, logout } = useAuth();

  console.log(user);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="light"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand>
            <img
              src="../images/icons/goodwork_logo_white.svg"
              alt="Logo WoodWork"
              className={styles.brandImage}
            />
            <span className={styles.brandTitle}>GoodWork</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-collapse-id" />
          <Navbar.Collapse id="navbar-collapse-id">
            <Nav>
              <Nav.Link as={Link} to="/" eventKey={1}>
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to={"/productos"} eventKey={2}>
                Productos
              </Nav.Link>
              <Nav.Link as={Link} to={"/destacados"} eventKey={3}>
                Destacados
              </Nav.Link>
              <Nav.Link as={Link} to={"/"} eventKey={4}>
                Contacto
              </Nav.Link>
              {user && user.role === "admin" && (
                <>
                  <Nav.Link as={Link} to={"/altaproducto"} eventKey={5}>
                    Stock
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/gestioncupones"} eventKey={6}>
                    Cupones
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={Link} to={"/carrito"} eventKey={7}>
                <img
                  src="../images/icons/shopping_cart_32dp.svg"
                  alt="Imagen de un carrito de compras"
                  width={"24"}
                  className={styles.imgLink}
                />
                <Badge pill bg="warning">
                  {getCartQuantity() ? getCartQuantity() : ""}
                </Badge>
              </Nav.Link>
              <div className="vr d-none d-lg-block mx-2" />
              {user ? (
                <>
                  <span className="text-muted ms-2">{user.email}</span>
                  <Button
                    variant="outline-light"
                    onClick={logout}
                    className="mx-2"
                  >
                    Salir
                  </Button>
                </>
              ) : (
                <Button
                  variant="outline-light"
                  as={Link}
                  to={"/login"}
                  className="ms-2"
                >
                  Acceder
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
