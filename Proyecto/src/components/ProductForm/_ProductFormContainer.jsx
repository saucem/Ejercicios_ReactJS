import React, { useState } from "react";
import { toast } from "react-toastify";
import { ProductForm } from "./ProductForm";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export function ProductFormContainer() {
  const [loading, setLoading] = useState(true);
  const [datosForm, setDatosForm] = useState({
    id: "",
    destacado: false,
    detalle: "",
    nombre: "",
    precio: "",
    stock: "",
    categoria: "",
  });
  const [checkBoxState, setCheckBoxState] = useState(false);

  const manejarCheckbox = (evento) => {
    setCheckBoxState(evento.target.checked);
    setDatosForm((datosCargados) => ({
      ...datosCargados,
      [destacado]: checkBoxState,
    }));
  };

  const manejarCambio = (evento) => {
    const { name, value, type } = evento.target;

    let formattedValue = value;
    if (type === "number") {
      formattedValue = value === "" ? "" : Number(value);
    }
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  const [imagenFile, setImagenFile] = useState(null);

  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    if (!imagenFile) {
      toast.warning("Por favor, seleccione una imagen para el producto");
      return;
    }

    const apiKey = "8ca44337062993d376f103d3f15cf4a7";
    const formData = new FormData();
    formData.append("image", imagenFile);

    try {
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
        const datosFormCompletos = {
          ...datosForm,
          imagen: datosImgbb.data.url,
        };
        console.log("Enviando producto a Firebase: ", datosFormCompletos);

        const db = getFirestore();
        const productsCollection = collection(db, "products");

        await addDoc(productsCollection, datosFormCompletos);
        toast.success("Producto creado", { autoClose: 2000 });
      } else {
        throw new Error("La subida de la imagen al servicio de Imgbb falló");
      }
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
    <>
      <ProductForm
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarCambioImagen={manejarCambioImagen}
        manejarCheckbox={manejarCheckbox}
        manejarEnvio={manejarEnvio}
      />
    </>
  );
}
