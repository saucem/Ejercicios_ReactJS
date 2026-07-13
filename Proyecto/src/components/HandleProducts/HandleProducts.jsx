import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { Container, Row, Table } from "react-bootstrap";
import { ProductForm } from "../ProductForm/ProductForm";

const [loading, setLoading] = useState(false);
const [checkBoxState, setCheckBoxState] = useState(false);
const [imagenFile, setImagenFile] = useState(null);
const [editProduct, setEditProduct] = useState(null);

const formInitState = {
  id: "",
  destacado: false,
  detalle: "",
  nombre: "",
  precio: "",
  stock: "",
  categoria: "",
  imagen: "",
};
const [datosForm, setDatosForm] = useState(formInitState);

const manejarCambio = (evento) => {
  const { name, value, type, checked } = evento.target;

  let formattedValue = value;
  if (type === "number") {
    formattedValue = value === "" ? "" : Number(value);
  }
  setDatosForm({
    ...datosForm,
    [name]: type === "checkbox" ? checked : value,
  });
};

const manejarCambioImagen = (evento) => {
  setImagenFile(evento.target.files[0]);
};

const HandleProducts = () => {
  const [productos, setProductos] = useState([]);
  const estadoInicialForm = {
    id: "",
    destacado: false,
    detalle: "",
    nombre: "",
    precio: 0,
    stock: 0,
    categoria: "",
  };

  const getProducts = async () => {
    const productsRef = collection(db, "products"); //Ajustar "productos" al nombre de tu colección
    const resp = await getDocs(productsRef);
    setProductos(
      resp.docs.map((doc) => ({ ...doc.data(), fireStoreId: doc.id })),
    );
    console.log(productos);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirmation = window.confirm(
      "¿Está seguro de que desea eliminar este producto?",
    );
    if (confirmation) {
      try {
        await deleteDoc(doc(db, "products", id));
        toast.success("Producto eliminado correctamente", { autoClose: 1000 });
        setProductos(productos.filter((prod) => prod.fireStoreId !== id));
      } catch (error) {
        console.error(error);
        toast.error("Error al eliminar el producto.");
      }
    }
  };

  const handleSelectedProduct = (producto) => {
    setEditProduct(producto);
    setDatosForm(producto);
  };

  const editMode = editProduct !== null;

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    setLoading(true);
    if (!imagenFile && !editMode) {
      toast.warning("Por favor, seleccione una imagen para el producto");
      return;
    }

    const apiKey = "8ca44337062993d376f103d3f15cf4a7";
    const formData = new FormData();
    formData.append("image", imagenFile);

    let urlImage = datosForm.imagen;

    try {
      //Si el usuario seleccionó una imagen nueva:
      if (imagenFile) {
        console.log("Subiendo la imagen al servicio Imgbb");
        const respuestaImgbb = await fetch(
          `https://api.imgbb.com/1/upload?key=${apiKey}`,
          {
            method: "POST",
            body: formData,
          },
        );

        const datosImgbb = await respuestaImgbb.json();

        if (datosImgbb.success) {
          console.log(
            "Datos enviados con éxito al servicio de Imgbb. URl de la imagen: ",
            datosImgbb.data.url,
          );
          urlImage = datosImgbb.data.url;
        } else {
          throw new Error("La subida de la imagen al servicio de Imgbb falló");
        }
      }

      const datosFormCompletos = {
        ...datosForm,
        imagen: urlImage,
      };
      console.log("Enviando producto a Firebase: ", datosFormCompletos);

      if (editMode) {
        const docRef = doc(db, "products", editProduct.fireStoreId);
        await updateDoc(docRef, datosFormCompletos);
      } else {
        const productsCollection = collection(db, "products");
        await addDoc(productsCollection, datosFormCompletos);
      }
      toast.success("Datos guardados", { autoClose: 2000 });

      await getProducts();
      setDatosForm(formInitState);
      setImagenFile(null);
      setEditProduct(null);
    } catch (error) {
      console.error("Error en el proceso de envío: ", error);
      toast.error(
        "Hubo un error al subir la imagen. Por favor, intentá de nuevo",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-light">
      <h2>Gestión de Productos</h2>

      <ProductForm
        datosForm={datosForm}
        loading={loading}
        editMode={editMode}
        manejarCambio={manejarCambio}
        manejarCambioImagen={manejarCambioImagen}
        manejarCheckbox={manejarCheckbox}
        manejarEnvio={manejarEnvio}
      />

      <Container>
        <Row>
          <h3>Lista de Productos</h3>
          <Table hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Detalle</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Destacado</th>
              </tr>
            </thead>
          </Table>
        </Row>
      </Container>
      <Table hover>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
      </Table>

      <ul>
        {productos.map((prod) => (
          <li key={prod.id}>
            {prod.nombre} - ${prod.precio} - FB ID: {prod.fireStoreId}
            {/*acá agregaremos los botones de acción */}
            <button
              onClick={() => handleDelete(prod.fireStoreId)}
              style={{ marginLeft: "10px" }}
            >
              Eliminar
            </button>
            <button
              onClick={() => handleSelectedProduct(prod)}
              style={{ marginLeft: "10px" }}
            >
              Editar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HandleProducts;
