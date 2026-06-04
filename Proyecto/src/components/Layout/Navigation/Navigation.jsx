import React from "react";
import { Container, Navbar } from 'react-bootstrap';
import { Nav, Button } from "react-bootstrap";
import styles from "./Navigation.module.css"
import { Link } from "react-router-dom";



export function Navigation() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <img src="../images/icons/goodwork_logo_white.svg" alt="Logo WoodWork" className={styles.brandImage} />
            <span className={styles.brandTitle}>GoodWork</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-collapse-id" />
          <Navbar.Collapse id="navbar-collapse-id">
            <Nav>
              <Nav.Link as={Link} to="/" eventKey={1}>Inicio</Nav.Link>
              <Nav.Link as={Link} to={"/productos"} eventKey={2}>Productos</Nav.Link>
              <Nav.Link as={Link} to={"/destacados"} eventKey={3}>Destacados</Nav.Link>
              <Nav.Link as={Link} to={"/"} eventKey={4}>Contacto</Nav.Link>
              <Nav.Link as={Link} to={"/carrito"} eventKey={5}>
                <img 
                  src="../images/icons/shopping_cart_32dp.svg"
                  alt="Imagen de un carrito de compras"
                  width={"24"}
                  className={styles.imgLink}
                />
              </Nav.Link>
              <div className="vr d-none d-lg-block mx-2" />
              <Nav.Link as={Link} to={"/altaproducto"} eventKey={7} className="nav-button">
                <Button variant="outline-warning">
                  Stock
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
} 