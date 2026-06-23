import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import styles from "./DBProductsDetail.module.css";

const DBProductsDetail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  console.log(id);

  // Incluir async await para absorber el tiempo de carga de la BD

  useEffect(() => {
    // cambiar a if (!id) return para que salga si no hay id
    if (id) {
      //Para buscar por ID de Firestore:
      //const docRef = doc(db, "products", id);

      //Para buscar por ID de producto:
      const queryId = query(
        collection(db, "products"),
        where("id", "==", Number(id)),
      );

      getDocs(queryId)
        .then((resp) => {
          if (!resp.empty) {
            setProducto({...resp.docs[0].data(), idFirestore: resp.docs[0].id});
          } else {
            console.log("No se encontró el producto");
          }
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  if (!producto) {
    return <h2>Cargando detalle del producto {id}...</h2>;
  }

  if (!producto.id) {
    return <h2>Producto no encontrado.</h2>;
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

export default DBProductsDetail;
