import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import styles from "./ItemDetail.module.css";

const ItemDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    //creamos una consulta = query
    const queryId = query(
      //creamos una referencia a la colección productos
      collection(db, "products"),
      //sólo los documentos cuyo campo id sea igual al valor recibido
      where("id", "==", id),
    );

    //getDocs usa el query
    getDocs(queryId)
      .then((resp) => {
        if (resp.empty) {
          console.log("No se encontró el producto");
          return;
        }
        setProducto({
          ...resp.docs[0].data(),
        });
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (!producto) {
    return <p className="text-light text-center h4">Cargando detalle del producto {id}...</p>;
  }
  if (!producto.id) {
    return <p className="text-light h4">Producto no encontrado.</p>;
  }

  const price = new Intl.NumberFormat("es-Latn");

  const previousPrice = producto.precio / 0.9;

  let netPrice = producto.precio / 1.21;
  netPrice = parseFloat(netPrice.toFixed(2));

  return (
    <>
      <section className={styles.container}>
        <Container>
          <Row className={styles.row}>
            <Col lg={6} className="text-center">
              <img
                src={producto.imagen}
                alt={`Imagen de ${producto.nombre}`}
                className={styles.imgDetail}
              />
            </Col>
            <Col lg={6} className="d-flex flex-column align-items-start">
              <div className="d-flex gap-2 align-items-center">
                <h2>{producto.nombre}</h2>
                <span>
                  {producto.destacado ? (
                    <Badge pill bg="danger" className="h6">
                      Destacado
                    </Badge>
                  ) : (
                    ""
                  )}
                </span>
              </div>
              <hr className="w-100" />
              <div className="d-flex flex-column">
                {producto.destacado ? (
                  <div className="d-flex align-items-center gap-2">
                    <p className="h5 m-0">
                      <s>${price.format(previousPrice)}</s>
                    </p>
                    <Badge bg="success">10% off</Badge>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <p className="h2">${price.format(producto.precio)}</p>
              <p className="text-small mb-2">
                Precio sin impuestos nacionales: ${price.format(netPrice)}
              </p>
              <div className="d-flex align-items-center gap-1">
                <img
                  src="/images/icons/package_36dp.svg"
                  alt="Icono de caja"
                  className="d-block"
                />
                <p className="h6 m-0">Disponibles: {producto.stock}</p>
              </div>
              <hr className="w-100 mb-2 mb-lg-4" />
              <p className="fs-6 lh-sm">{producto.detalle}</p>
              <hr className="w-100 mb-2 mb-lg-4" />
              <div className="d-flex flex-column gap-2 mb-2">
                <span className="d-flex gap-1 align-items-center">
                  <img
                    src="/images/icons/local_shipping_36dp.svg"
                    alt="Icono de camión de envíos"
                  />
                  <p className="h6 m-0">Envío GRATIS a partir de $100.000</p>
                </span>
                <span className="d-flex gap-1 align-items-center">
                  <img
                    src="/images/icons/store_front_36dp.svg"
                    alt="Icono de camión de envíos"
                  />
                  <p className="h6 m-0">Retiro GRATIS en sucursales</p>
                </span>
              </div>
              <Button
                variant="warning"
                onClick={() => console.log("Added to cart")}
                className="mt-auto"
              >
                Comprar ahora
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ItemDetail;
