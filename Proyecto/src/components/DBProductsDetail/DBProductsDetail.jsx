import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import styles from "./DBProductsDetail.module.css";

const DBProductsDetail = () => {
  const [dato, setItem] = useState(null);
  const { id } = useParams();

  console.log(id)

// Incluir async await para absorber el tiempo de carga de la BD

  
  useEffect(() => {
    if (id) {
      const docRef = doc(db, "products", id);
      getDoc(docRef)
        .then((resp) => {
          if (resp.exists()) {
            setItem({ ...resp.data(), id: resp.id });
            console.log(resp.data(), id)
          } else {
            console.log("No se encontró el producto");
          }
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  dato ? console.log(dato.precio, dato.nombre) : console.log("aún no cargado")

  const price = new Intl.NumberFormat("es-Latn");

  //const previousPrice = dato.precio / 0.9;

  //let netPrice = dato.precio / 1.21;
  //netPrice = parseFloat(netPrice.toFixed(2));

}

export default DBProductsDetail;
